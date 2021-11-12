import { Component, OnInit } from '@angular/core';
import { Vector3 } from '@babylonjs/core';
import { CameraService } from 'src/app/renderer/camera.service';
import { EventsBrokerService } from 'src/app/shared/events-broker.service';
import { Vector3Memento } from '../../../../../server/src/events.model';

@Component({
  selector: 'app-position-panel',
  templateUrl: './position-panel.component.html',
  styleUrls: ['./position-panel.component.scss'],
})
export class PositionPanelComponent implements OnInit {
  characterPosition: Vector3Memento;
  cameraAngle: Vector3;

  constructor(private broker: EventsBrokerService, private camera: CameraService) {}

  ngOnInit(): void {
    this.characterPosition = new Vector3Memento();
    this.cameraAngle = Vector3.Zero();
    
    this.broker.onUpdateCharacter.subscribe((character) => {
      this.characterPosition = character.position;
      this.cameraAngle = this.camera.getAngle();
    });
  }
}
