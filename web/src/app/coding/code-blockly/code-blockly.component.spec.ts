import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from 'src/app/app.testbed';
import { CodeBlocklyComponent } from './code-blockly.component';
declare var Blockly: any;

describe('CodeBlocklyComponent', () => {
  let component: CodeBlocklyComponent;
  let fixture: ComponentFixture<CodeBlocklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
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
