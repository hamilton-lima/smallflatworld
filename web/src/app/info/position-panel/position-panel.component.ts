import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Tools } from '@babylonjs/core';
import { EventsBrokerService } from 'src/app/shared/events-broker.service';
import { Vector3Memento } from 'src/app/realm/realm.model';

@Component({
  selector: 'app-position-panel',
  templateUrl: './position-panel.component.html',
  styleUrls: ['./position-panel.component.scss'],
})
export class PositionPanelComponent implements OnInit {
  @ViewChild('compass') compass: ElementRef;
  characterPosition: Vector3Memento;

  constructor(
    private broker: EventsBrokerService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.characterPosition = new Vector3Memento();

    this.broker.onUpdateCharacter.subscribe((character) => {
      this.characterPosition = character.position;
      const normalizedRad = character.rotation.y % (2 * Math.PI);
      const angle = Tools.ToDegrees(normalizedRad);
      this.rotateCompass(angle);
    });
  }

  rotateCompass(angle: number) {
    const adjustedAngle = angle * -1;
    const rotate = `rotate(${adjustedAngle}deg)`;
    this.renderer.setStyle(this.compass.nativeElement, 'transform', rotate);
  }
}
