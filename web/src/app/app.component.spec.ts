import { ApplicationModule } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { RendererComponent } from './renderer/renderer.component';

describe('AppComponent', () => {
  let fixture;
  let native;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, RendererComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    native = fixture.debugElement.nativeElement;
  }));

  afterEach(() => {
    native.remove();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
