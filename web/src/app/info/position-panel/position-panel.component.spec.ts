import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PositionPanelComponent } from './position-panel.component';

describe('PositionPanelComponent', () => {
  let component: PositionPanelComponent;
  let fixture: ComponentFixture<PositionPanelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
