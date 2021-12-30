import { Injectable } from '@angular/core';
import * as Tone from 'tone';
import { SceneAudio } from '../../../../colyseus-server/src/room.state';

class NoteDef {
  note: Tone.Unit.Frequency;
  duration: Tone.Unit.Time;
  time: number;
}

@Injectable({
  providedIn: 'root',
})
export class AudioPlayerService {
  synth: Tone.Synth<Tone.SynthOptions>;

  playSound(audio: SceneAudio) {
    const player = new Tone.Player(audio.base64).toDestination();
    Tone.loaded().then(() => {
      player.start();
    });
  }

  /*
  Accepted format will be 
  "note:duration:time note:duration:time"
  
  duration and time are optionals and will use the defaults
  - duration 8n
  - time 0.5
  */
  play(audio: string) {
    audio = audio.trim();

    const notes: string[] = audio.split(' ');
    const defs: NoteDef[] = [];
    for (let single of notes) {
      const def = this.buildNoteDefinition(single, '8n', 0.5);
      if (def) {
        defs.push(def);
      }
    }
    const now = Tone.now();
    let time = 0;

    for (let single of defs) {
      console.log('schedule to play', single);
      this.synth.triggerAttackRelease(single.note, single.duration, now + time);
      time += single.time;
    }
  }

  playNote(note: string, duration: Tone.Unit.Time, time: Tone.Unit.Time) {
    this.synth.triggerAttackRelease(note, duration, time);
  }

  buildNoteDefinition(input: string, duration: Tone.Unit.Time, time: number) {
    const elements = input.split(':');
    if (elements.length <= 0) {
      return null;
    }

    let _duration = duration;
    if (elements.length > 1) {
      _duration = elements[1];
    }

    let _time = time;
    if (elements.length > 2) {
      try {
        _time = Number.parseFloat(elements[2]);
      } catch (error) {
        console.warn('Invalid time', elements[2]);
      }
    }

    const result = <NoteDef>{
      note: elements[0],
      duration: _duration,
      time: _time,
    };

    return result;
  }

  constructor() {
    this.synth = new Tone.Synth().toDestination();
  }
}
