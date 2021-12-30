import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Realm, SceneAudio } from '../../../../colyseus-server/src/room.state';
import { ClientService } from '../multiplayer/client.service';
import { RealmService } from '../realm/realm.service';
import { AudioPlayerService } from '../shared/audio-player.service';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  onUpdate: BehaviorSubject<SceneAudio[]>;
  selected: SceneAudio;

  constructor(
    private client: ClientService,
    private realm: RealmService,
    private player: AudioPlayerService
  ) {
    this.onUpdate = new BehaviorSubject([]);
    this.realm.onNew.subscribe((newRealm) => {
      this.propagateChanges(newRealm);
    });
  }

  propagateChanges(realm: Realm) {
    this.onUpdate.next(Array.from(realm.audios.values()));
  }

  select(audio: SceneAudio) {
    this.selected = audio;
  }

  getCurrent() {
    return this.selected;
  }

  getCurrentAudioName() {
    if (this.selected) {
      return this.selected.name;
    }
    return '';
  }

  findByName(name: string) {
    const found = this.onUpdate.value.find((audio) => audio.name == name);
    return found;
  }

  add(audio: SceneAudio) {
    this.client.updateAudio(audio);
    this.realm.addAudio(audio).then((_) => {
      this.propagateChanges(this.realm.getCurrentRealm());
    });
  }

  remove(name: string) {
    this.client.deleteAudio(name);
    return this.realm.deleteAudio(name).then((_) => {
      this.propagateChanges(this.realm.getCurrentRealm());
    });
  }

  // TODO: implement this
  canRemove(name: string): boolean {
    return true;
  }

  fileInputToBase64(file): Subject<string> {
    const result = new Subject<string>();
    const reader = new FileReader();

    reader.onloadend = function () {
      result.next(reader.result.toString());
    };

    console.log('file upload', file);
    reader.readAsDataURL(file);

    result.subscribe((base64) => {
      const image = <SceneAudio>{
        name: file.name,
        base64: base64,
      };
      this.add(image);
    });

    return result;
  }

  play(audio: SceneAudio) {
    this.player.playSound(audio);
  }

  playSoundByName(name: string) {
    const audio = this.onUpdate.value.find((audio) => audio.name == name);
    if (audio) {
      this.play(audio);
    } else {
      console.error('audio not found', name);
    }
  }
}
