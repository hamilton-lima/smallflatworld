import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesLibraryComponent } from './images-library.component';

describe('ImagesLibraryComponent', () => {
  let component: ImagesLibraryComponent;
  let fixture: ComponentFixture<ImagesLibraryComponent>;

  beforeEach(async(() => {
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
