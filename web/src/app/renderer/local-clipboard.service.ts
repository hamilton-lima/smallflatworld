import { Injectable } from '@angular/core';
import { EditorService } from '../editor/editor.service';
import { KeyboardService } from './keyboard.service';

@Injectable({
  providedIn: 'root',
})
export class LocalClipboardService {
  constructor(
    private editor: EditorService,
    private keyboard: KeyboardService
  ) {}

  render() {
    if (this.keyboard.Ctrl() && this.keyboard.keyState.KeyC) {
      this.keyboard.resetCtrl();
      console.log('Ctrl+C');
    }
    
    if (this.keyboard.Ctrl() && this.keyboard.keyState.KeyV) {
      this.keyboard.resetCtrl();
      console.log('Ctrl+V');
    }

    // TODO: Prevent this event to to mixed with browser Ctrl+D or movement
    if (this.keyboard.Ctrl() && this.keyboard.keyState.KeyD) {
      this.keyboard.resetCtrl();
      console.log('Ctrl+D');
    }

  }
}
