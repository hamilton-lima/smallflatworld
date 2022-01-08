import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from 'src/app/app.testbed';

import { Design3dLibraryComponent } from './design3d-library.component';

describe('Design3dLibraryComponent', () => {
  let component: Design3dLibraryComponent;
  let fixture: ComponentFixture<Design3dLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Design3dLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
