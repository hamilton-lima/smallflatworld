import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_TESTBED_MODULE } from '../app.testbed';
import { RendererComponent } from './renderer.component';

describe('RendererComponent', () => {
  let component: RendererComponent;
  let fixture: ComponentFixture<RendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Fix this test
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
