import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from 'src/app/app.testbed';

import { EditorModePickerComponent } from './editor-mode-picker.component';

describe('EditorModePickerComponent', () => {
  let component: EditorModePickerComponent;
  let fixture: ComponentFixture<EditorModePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
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
