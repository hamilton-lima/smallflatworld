import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from 'src/app/app.testbed';

import { CodePanelComponent } from './code-panel.component';

describe('CodePanelComponent', () => {
  let component: CodePanelComponent;
  let fixture: ComponentFixture<CodePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
