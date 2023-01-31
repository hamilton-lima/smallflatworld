import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Design3dLibraryComponent } from './design3d-library.component';

describe('Design3dLibraryComponent', () => {
  let component: Design3dLibraryComponent;
  let fixture: ComponentFixture<Design3dLibraryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Design3dLibraryComponent ]
    })
    .compileComponents();
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
