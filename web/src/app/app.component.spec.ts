import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_TESTBED_MODULE } from './app.testbed';

describe('AppComponent', () => {
  let fixture;
  let native;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    native = fixture.debugElement.nativeElement;
  });

  afterEach(() => {
    native.remove();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
