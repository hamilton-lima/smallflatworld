import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmToolbarComponent } from './realm-toolbar.component';

describe('RealmToolbarComponent', () => {
  let component: RealmToolbarComponent;
  let fixture: ComponentFixture<RealmToolbarComponent>;

  beforeEach(async(() => {
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
