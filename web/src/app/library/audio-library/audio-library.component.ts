import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AudioPlayerService } from 'src/app/shared/audio-player.service';
import { ConfirmOptions, ConfirmService } from 'src/app/shared/confirm.service';
import { NotifyService } from 'src/app/shared/notify.service';
import { SceneAudio } from '../../../../../server/src/events.model';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-audio-library',
  templateUrl: './audio-library.component.html',
  styleUrls: ['./audio-library.component.scss'],
})
export class AudioLibraryComponent implements OnInit {
  current: SceneAudio;
  mouseOverAudio: string;
  audios: BehaviorSubject<SceneAudio[]>;
  columns: string[] = ['play', 'name', 'delete'];

  constructor(
    private service: AudioService,
    private confirm: ConfirmService,
    private notify: NotifyService,
  ) {
    this.audios = new BehaviorSubject<SceneAudio[]>([]);
  }

  ngOnInit(): void {
    this.service.onUpdate.subscribe((audios) => {
      this.audios.next(audios);
    });
  }

  mouseOver(name: string) {
    console.log('mouseover', name);
    this.mouseOverAudio = name;
  }

  newAudio(file: File) {
    this.service.fileInputToBase64(file).subscribe((audio) => {
      console.log('new audio file created');
    });
  }

  async delete(name: string) {
    if (this.service.canRemove(name)) {
      const response = await this.confirm.confirm([
        'Do you want to remove this sound file?',
        'There is no going back from here...',
      ]);

      if (response == ConfirmOptions.YES) {
        await this.service.remove(name);
      }
    } else {
      this.notify.info("Some code is USING this sound, we can't delete it.");
    }
  }

  play(audio: SceneAudio) {
    this.service.play(audio);
  }

}
