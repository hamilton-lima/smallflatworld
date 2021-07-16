import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmUploadComponent } from './realm-upload.component';

describe('RealmUploadComponent', () => {
  let component: RealmUploadComponent;
  let fixture: ComponentFixture<RealmUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
