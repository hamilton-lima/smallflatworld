import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImagesLibraryComponent } from './images-library.component';

describe('ImagesLibraryComponent', () => {
  let component: ImagesLibraryComponent;
  let fixture: ComponentFixture<ImagesLibraryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagesLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagesLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
