import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpDownComponent } from './up-down.component';

describe('UpDownComponent', () => {
  let component: UpDownComponent;
  let fixture: ComponentFixture<UpDownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
