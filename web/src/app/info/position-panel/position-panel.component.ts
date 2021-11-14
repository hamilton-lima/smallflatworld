import { Component, OnInit } from '@angular/core';
import { Tools } from '@babylonjs/core';
import { EventsBrokerService } from 'src/app/shared/events-broker.service';
import { Vector3Memento } from '../../../../../server/src/events.model';

@Component({
  selector: 'app-position-panel',
  templateUrl: './position-panel.component.html',
  styleUrls: ['./position-panel.component.scss'],
})
export class PositionPanelComponent implements OnInit {
  characterPosition: Vector3Memento;
  cameraRotation = 0;

  constructor(
    private broker: EventsBrokerService,
  ) {}

  ngOnInit(): void {
    this.characterPosition = new Vector3Memento();

    this.broker.onUpdateCharacter.subscribe((character) => {
      this.characterPosition = character.position;
      const nomrmalizedRad = character.rotation.y % (2 * Math.PI);
      this.cameraRotation = Tools.ToDegrees(nomrmalizedRad);
    });
  }
}
