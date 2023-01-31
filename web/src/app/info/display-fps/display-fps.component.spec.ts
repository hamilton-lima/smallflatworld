import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayFPSComponent } from './display-fps.component';

describe('DisplayFPSComponent', () => {
  let component: DisplayFPSComponent;
  let fixture: ComponentFixture<DisplayFPSComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFPSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
