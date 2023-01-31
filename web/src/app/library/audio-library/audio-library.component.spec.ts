import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AudioLibraryComponent } from './audio-library.component';

describe('AudioLibraryComponent', () => {
  let component: AudioLibraryComponent;
  let fixture: ComponentFixture<AudioLibraryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioLibraryComponent ]
    })
    .compileComponents();
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
