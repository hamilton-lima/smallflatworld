import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlocklyComponent } from './code-blockly.component';

describe('CodeBlocklyComponent', () => {
  let component: CodeBlocklyComponent;
  let fixture: ComponentFixture<CodeBlocklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeBlocklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBlocklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
