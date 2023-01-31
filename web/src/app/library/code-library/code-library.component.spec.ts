import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeLibraryComponent } from './code-library.component';

describe('CodeLibraryComponent', () => {
  let component: CodeLibraryComponent;
  let fixture: ComponentFixture<CodeLibraryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
