import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatBottomSheet,
  MatBottomSheetConfig,
} from '@angular/material/bottom-sheet';
import { Subject } from 'rxjs';
import {
  BottomMessageComponent,
  BottomMessageData,
} from './bottom-message/bottom-message.component';
import { AudioPlayerService } from '../shared/audio-player.service';
import { AudioService } from '../library/audio.service';
import { EventsBrokerService } from '../shared/events-broker.service';
import { Vector3 } from '@babylonjs/core';
import { MeshService } from '../renderer/mesh.service';
import { SceneService } from '../shared/scene.service';
import { MovementService } from '../renderer/movement.service';
import { InputService } from '../shared/input.service';

function playSoundByName(name: string) {
  console.log('playSound', name);
  sharedContext.audio.playSoundByName(name);
}

function showMessage(message: string) {
  console.log('showmessage', message);
  const ref = sharedContext.snackBar.open(message, 'DISMISS', {
    duration: 5000,
  });

  ref.afterDismissed().toPromise().then(() => {
    sharedContext.input.focus();
  })
}

class Position {
  vector3: Vector3;
  constructor(x: number, z: number, y: number) {
    this.vector3 = new Vector3(x, y, z);
  }
}

function teleportCharacterImpl(destination: Position) {
  const position = destination.vector3;
  const rotation = Vector3.Zero();

  console.log('teleport', destination.vector3);
  const engineState = sharedContext.broker.engineState.getValue();
  sharedContext.movement.teleport(engineState.character, position, rotation);
}

function turnCharacterImpl(degrees: number) {
  console.log('turn', degrees);
  const engineState = sharedContext.broker.engineState.getValue();
  sharedContext.movement.rotate(engineState.character, degrees);
}

function createImpl(
  library: string,
  component: string,
  image: string,
  position: Position
) {
  console.log('create', library, component, image, position.vector3);

  const engineState = sharedContext.broker.engineState.getValue();
  console.log('engine state', engineState);
  if (engineState) {
    const start = engineState.character.position;
    const creationPosition = start.add(position.vector3);
    console.log('create element', start, creationPosition, position.vector3);
    // CREATE the component using the character position as reference!!
    sharedContext.scene.addFromLibraryComponentID(
      engineState.scene,
      component,
      image,
      creationPosition
    );
  } else {
    console.warn('engine state is not ready');
  }
}

function showBottomMessage(message: string) {
  console.log('showBottomMessage', message);

  // TODO: accept multiple lines in blockly
  const data = <BottomMessageData>{
    messages: [message],
  };
  const config = <MatBottomSheetConfig>{
    data: data,
  };
  sharedContext.bottomSheet.open(BottomMessageComponent, config);
}

class Context {
  snackBar: MatSnackBar;
  bottomSheet: MatBottomSheet;
  audio: AudioService;
  mesh: MeshService;
  broker: EventsBrokerService;
  scene: SceneService;
  movement: MovementService;
  input: InputService;
}

let sharedContext: Context;

class CodeRunner {
  onClickHandlers = [];

  constructor(uuid: string, code: string) {
    try {
      // variables exposed to eval()
      const position = new Position(0, 0, 0);
      const message = showMessage;
      const bottomMessage = showBottomMessage;
      const playSound = playSoundByName;
      const create = createImpl;
      const teleport = teleportCharacterImpl;
      const turn = turnCharacterImpl;
      const onClick = this.onClickHandlers;

      // execute the code
      eval(code);
    } catch (error) {
      console.warn('error parsing code', error, code);
    }
    console.log('after', this.onClickHandlers);
  }

  click() {
    for (const handler of this.onClickHandlers) {
      // inject this context to the function
      handler.call(this);
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class RunnerService {
  public onClick: Subject<string> = new Subject();
  registry = {};

  constructor(
    public snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet,
    private player: AudioPlayerService,
    private audio: AudioService,
    private broker: EventsBrokerService,
    private mesh: MeshService,
    private scene: SceneService,
    private movement: MovementService,
    private input: InputService,
  ) {
    // make injected services available to scripts
    sharedContext = <Context>{
      snackBar: this.snackBar,
      bottomSheet: this.bottomSheet,
      player: this.player,
      audio: this.audio,
      mesh: this.mesh,
      broker: this.broker,
      scene: this.scene,
      movement: this.movement,
      input: this.input,
    };

    this.onClick.subscribe((uuid) => {
      const handler = this.registry[uuid];
      if (handler) {
        handler.click();
      }
    });

    // remove existing runner for a deleted element
    this.broker.onDeleteSceneElement.subscribe((element) =>
      this.delete(element.name)
    );
  }

  register(uuid: string, code: string) {
    this.registry[uuid] = new CodeRunner(uuid, code);
  }

  click(uuid: string) {
    this.onClick.next(uuid);
  }

  delete(uuid: string) {
    delete this.registry[uuid];
    // TODO: remove running on repeat events
  }
}
