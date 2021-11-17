import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RealmService } from './realm/realm.service';
import { InputService } from './shared/input.service';
import { MatDrawer } from '@angular/material/sidenav';
import { CodeEditRequest, CodingService } from './coding/coding.service';
import { VERSION } from 'src/app/version';
import { EditorModeService } from './editor/editor-mode.service';
import { AudioPlayerService } from './shared/audio-player.service';
import { EditorService } from './editor/editor.service';
import { EventsBrokerService } from './shared/events-broker.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  ready = false;
  name = '';
  version = VERSION;
  audio = 'C4 D4 E4 F4 G4 A4:4n B4 C5';

  play() {
    this.player.play(this.audio);
  }

  @ViewChild('drawer') drawer: MatDrawer;
  @ViewChild('drawerRight') drawerRight: MatDrawer;

  constructor(
    private realm: RealmService,
    private input: InputService,
    private coding: CodingService,
    private editorMode: EditorModeService,
    private player: AudioPlayerService,
    private editor: EditorService,
    private broker: EventsBrokerService
  ) {}

  ngAfterViewInit(): void {
    // mode changed, close the code editor
    this.editorMode.mode.subscribe((mode) => {
      console.log('mode changed', mode);
      this.drawerRight.close();
    });
  }

  ngOnInit(): void {
    this.realm.ready().then(
      () => {
        this.ready = true;
        this.name = this.realm.getCurrentRealm().name;
      },
      (error) => {
        console.error('Something happened when initializing the system', error);
      }
    );

    this.coding.onEdit.subscribe((request) => this.toggleRight(request));

    // selection is deleted close the code panel
    this.editor.onSelectClickable.subscribe((mesh) => {
      if (!mesh) {
        this.closeRight();
      }
    });

    this.broker.requestToCloseCodePanel.subscribe(() => {
      this.closeRight();
    });
  }

  closeRight(){
    this.drawerRight.close();
    this.coding.isEditing.next(this.drawerRight.opened);
  }

  lastSelection: string;
  toggleRight(request: CodeEditRequest): void {
    const selection = request.uuid;
    if (selection == this.lastSelection) {
      this.drawerRight.toggle();
    } else {
      this.drawerRight.open();
    }
    this.lastSelection = selection;
    this.coding.isEditing.next(this.drawerRight.opened);
  }
}
