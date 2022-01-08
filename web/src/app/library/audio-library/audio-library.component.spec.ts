import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from 'src/app/app.testbed';

import { AudioLibraryComponent } from './audio-library.component';

describe('AudioLibraryComponent', () => {
  let component: AudioLibraryComponent;
  let fixture: ComponentFixture<AudioLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
