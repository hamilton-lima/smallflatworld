import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditorModePickerComponent } from './editor-mode-picker.component';

describe('EditorModePickerComponent', () => {
  let component: EditorModePickerComponent;
  let fixture: ComponentFixture<EditorModePickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorModePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorModePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
