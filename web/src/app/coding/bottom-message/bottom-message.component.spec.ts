import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BottomMessageComponent } from './bottom-message.component';

describe('BottomMessageComponent', () => {
  let component: BottomMessageComponent;
  let fixture: ComponentFixture<BottomMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
