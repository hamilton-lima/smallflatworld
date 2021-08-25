import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealmUploadComponent } from './realm-upload.component';
import { AppModule } from '../../app.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('RealmUploadComponent', () => {
  let component: RealmUploadComponent;
  let fixture: ComponentFixture<RealmUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AppModule],
      declarations: [RealmUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RealmUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
