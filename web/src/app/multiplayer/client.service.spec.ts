import { TestBed } from '@angular/core/testing';
import { Vector3 } from '@babylonjs/core';
import { Subscription } from 'rxjs';
import {
  ShareResponse,
  StateUpdate,
} from '../../../../server/src/events.model';
import { APP_TESTBED_MODULE } from '../app.testbed';
import { SceneElement } from '../persistence/persistence.model';

import { ClientService } from './client.service';
import { ServerService } from './server.service';

describe('ClientService', () => {
  let service: ClientService;
  let serverService: ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
    service = TestBed.inject(ClientService);
    serverService = TestBed.inject(ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should clean subscriptions on unsubscribe', () => {
    service.subscriptions.push(new Subscription());
    service.unsubscribe();
    expect(service.subscriptions.length).toBe(0);
  });

  it('should unsubcribe subscriptions that are not closed', () => {
    const active = new Subscription();
    const closedSub = new Subscription();
    closedSub.closed = true;

    const spyActive = spyOn(active, 'unsubscribe');
    const spyClosed = spyOn(closedSub, 'unsubscribe');

    service.subscriptions.push(active);
    service.subscriptions.push(closedSub);

    service.unsubscribe();
    expect(service.subscriptions.length).toBe(0);

    expect(spyActive).toHaveBeenCalled();
    expect(spyClosed).not.toHaveBeenCalled();
  });

  it('should unsubcribe to all when calling share', () => {
    const spy = spyOn(serverService, 'share');
    const spyUnsubscribe = spyOn(service, 'unsubscribe');
    service.share();
    expect(spyUnsubscribe).toHaveBeenCalled();
  });

  it('should update realmUUID with response and call listen2Updates', () => {
    const spyListen = spyOn(service, 'listen2Updates');
    const spy = spyOn(serverService, 'share');
    service.share();
    serverService.onShare.next(<ShareResponse>{ uuid: 'foo.bar.42' });

    expect(spyListen).toHaveBeenCalled();
    expect(service.realmUUID).toBe('foo.bar.42');
  });

  it('should add subscription when share()', () => {
    const spy = spyOn(serverService, 'share');
    expect(service.subscriptions.length).toBe(0);
    service.share();
    expect(service.subscriptions.length).toBe(1);
  });

  it('should add subscription when listen2Updates()', () => {
    expect(service.subscriptions.length).toBe(0);
    service.listen2Updates();
    expect(service.subscriptions.length).toBe(1);
  });

  it('should generate event with state update after listen2Updates', (done) => {
    const spyNext = spyOn(service.onUpdate, 'next').and.callThrough();
    const position = new Vector3();
    position.x = 1;
    position.y = 2;
    position.z = 3;

    const rotation = new Vector3();
    rotation.x = 4;
    rotation.y = 5;
    rotation.z = 6;

    let response: SceneElement[];
    service.onUpdate.subscribe((update) => {
      response = update;
      expect(spyNext).toHaveBeenCalled();
      expect(response.length).toBe(1);
      const one = response[0];
      expect(one.name).toBe('foo');

      expect(one.position.x).toBe(1);
      expect(one.position.y).toBe(2);
      expect(one.position.z).toBe(3);

      expect(one.rotation.x).toBe(4);
      expect(one.rotation.y).toBe(5);
      expect(one.rotation.z).toBe(6);

      done();
    });

    service.listen2Updates();
    serverService.onStateUpdate.next(<StateUpdate>{
      data: [{ name: 'foo', position: position, rotation: rotation }],
    });
  });

  it('stopShare should unsubscribe and remove UUID', () => {
    service.realmUUID = 'foo.bar';
    const spy = spyOn(service, 'unsubscribe');
    service.stopShare();

    expect(spy).toHaveBeenCalled();
    expect(service.realmUUID).toBeNull();
  });

  it('should call server.share when calling share()', () => {
    const spy = spyOn(serverService, 'share');
    service.share();
    expect(spy).toHaveBeenCalled();
  });
});
