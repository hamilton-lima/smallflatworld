import { Injectable } from '@angular/core';
import { NOTES } from './notes';

enum OscillatorType {
  sine = 'sine',
  square = 'square',
  sawtooth = 'sawtooth',
  triangle = 'triangle',
}

@Injectable({
  providedIn: 'root',
})
export class SimpleABCAudioPlayerService {
  context: AudioContext;

  constructor() {
    this.context = new AudioContext();
  }

  play(audio: string) {
    this.playWithType(audio, OscillatorType.sine);
  }

  playWithType(audio: string, type: OscillatorType) {
    console.log('play()', audio);
    const duration = 0.25;
    const sequence = this.textToHZSequence(audio);
    this.playSequence(sequence, type, duration);
  }

  async playSequence(
    sequence: number[],
    type: OscillatorType,
    duration: number
  ) {
    for (let value of sequence) {
      await this.playSingle(value, type, duration);
      console.log('play', value);
    }
  }

  playSingle(hertz: number, type: OscillatorType, duration: number) {
    return new Promise<void>((resolve) => {
      const gain = this.context.createGain();
      const oscilator = this.context.createOscillator();

      oscilator.connect(gain);
      gain.connect(this.context.destination);
      oscilator.type = type;

      oscilator.onended = () => {
        console.log('ended', hertz);
        resolve();
      };
      oscilator.frequency.value = hertz;
      oscilator.start(0);
      oscilator.stop(this.context.currentTime + duration);

      gain.gain.exponentialRampToValueAtTime(
        0.00001,
        this.context.currentTime + duration
      );
    });
  }

  textToHZSequence(audio: string): number[] {
    const list = audio.split(' ');
    const result = [];
    for (let note of list) {
      const value = NOTES[note];
      if (value) {
        result.push(value);
      }
    }
    return result;
  }
}
