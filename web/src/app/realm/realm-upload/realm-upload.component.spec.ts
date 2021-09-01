import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealmUploadComponent } from './realm-upload.component';
import { APP_TESTBED_MODULE } from '../../app.testbed';

describe('RealmUploadComponent', () => {
  let component: RealmUploadComponent;
  let fixture: ComponentFixture<RealmUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(APP_TESTBED_MODULE).compileComponents();

    fixture = TestBed.createComponent(RealmUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
