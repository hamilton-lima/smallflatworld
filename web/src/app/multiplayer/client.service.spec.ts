import { TestBed } from '@angular/core/testing';
import { Subscription } from 'rxjs';
import { APP_TESTBED_MODULE } from '../app.testbed';
import { Realm, SceneElementMemento } from '../realm/realm.model';
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

  it('should handle adding a new element', (done) => {
    serverService.connect('http://localhost:8765/gun');

    const realm = new Realm();
    realm.id = 'test-bananas';
    const character = new SceneElementMemento();
    character.name = 'banana';
    service.share(realm, character);

    const memento = new SceneElementMemento();
    memento.name = 'first';

    service.elements
      .from()
      .onChange()
      .subscribe((newGuy) => {
        expect(newGuy).toBeTruthy();
        expect(newGuy.name).toBe('first');
        done();
      });

    service.elements.to().add(memento);
  });

  it('should handle update of element position', (done) => {
    serverService.connect('http://localhost:8765/gun');

    const realm = new Realm();
    realm.id = 'test-bananas';
    const character = new SceneElementMemento();
    character.name = 'banana';
    service.share(realm, character);

    const memento = new SceneElementMemento();
    memento.name = 'first';

    memento.position.x = 1;
    memento.position.y = 1;
    memento.position.z = 1;
    service.elements.to().add(memento);

    service.elements
      .from()
      .onChange()
      .subscribe((newGuy) => {
        expect(newGuy).toBeTruthy();
        expect(newGuy.name).toBe('first');
        // wait until the last state to be 3,4,5
        if (
          newGuy.position.x == 3 &&
          newGuy.position.y == 4 &&
          newGuy.position.z == 5
        ) {
          done();
        }
      });

    memento.position.x = 3;
    memento.position.y = 4;
    memento.position.z = 5;
    service.elements.to().update(memento);
  });

  it('should remove and element correctly', (done) => {
    serverService.connect('http://localhost:8765/gun');

    const realm = new Realm();
    realm.id = 'test-bananas';
    const character = new SceneElementMemento();
    character.name = 'banana';
    service.share(realm, character);

    const memento = new SceneElementMemento();
    memento.name = 'first';

    service.elements.to().add(memento);

    service.elements
      .from()
      .onRemove()
      .subscribe((newGuy) => {
        expect(newGuy).toBeTruthy();
        expect(newGuy.name).toBe('first');
        done();
      });

    service.elements.to().remove(memento);
  });

  // it('should generate event with state update after listen2Updates', (done) => {
  //   done();
  //   // const spyNext = spyOn(service.onUpdate, 'next').and.callThrough();
  //   // const position = new Vector3();
  //   // position.x = 1;
  //   // position.y = 2;
  //   // position.z = 3;

  //   // const rotation = new Vector3();
  //   // rotation.x = 4;
  //   // rotation.y = 5;
  //   // rotation.z = 6;

  //   // let response: SceneElement[];
  //   // service.onUpdate.subscribe((update) => {
  //   //   response = update;
  //   //   expect(spyNext).toHaveBeenCalled();
  //   //   expect(response.length).toBe(1);
  //   //   const one = response[0];
  //   //   expect(one.name).toBe('foo');

  //   //   expect(one.position.x).toBe(1);
  //   //   expect(one.position.y).toBe(2);
  //   //   expect(one.position.z).toBe(3);

  //   //   expect(one.rotation.x).toBe(4);
  //   //   expect(one.rotation.y).toBe(5);
  //   //   expect(one.rotation.z).toBe(6);

  //   //   done();
  //   // });

  //   // service.listen2Updates();
  //   // serverService.onStateUpdate.next(<StateUpdate>{
  //   //   data: [{ name: 'foo', position: position, rotation: rotation }],
  //   // });
  // });

  // it('stopShare should unsubscribe and remove UUID', () => {
  //   // service.realmUUID = 'foo.bar';
  //   // const spy = spyOn(service, 'unsubscribe');
  //   // service.stopShare();

  //   // expect(spy).toHaveBeenCalled();
  //   // expect(service.realmUUID).toBeNull();
  // });

  // it('should call server.share when calling share()', () => {
  //   // const spy = spyOn(serverService, 'share');
  //   // service.share();
  //   // expect(spy).toHaveBeenCalled();
  // });
});
