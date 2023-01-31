import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RealmToolbarComponent } from './realm-toolbar.component';

describe('RealmToolbarComponent', () => {
  let component: RealmToolbarComponent;
  let fixture: ComponentFixture<RealmToolbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
