import { Component, OnInit } from '@angular/core';
import { EngineState } from 'src/app/renderer/renderer.model';
import { EventsBrokerService } from 'src/app/shared/events-broker.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-display-fps',
  templateUrl: './display-fps.component.html',
  styleUrls: ['./display-fps.component.scss'],
})
export class DisplayFPSComponent implements OnInit {
  fps = 'N/A';
  engineState: EngineState;
  constructor(private broker: EventsBrokerService) {
    this.broker.engineState.subscribe((engineState) => {
      this.engineState = engineState;
    });
  }

  ngOnInit(): void {
    interval(1000).subscribe((_) => {
      if (this.engineState) {
        this.fps = this.engineState.engine.getFps().toFixed();
      }
    });
  }
}
