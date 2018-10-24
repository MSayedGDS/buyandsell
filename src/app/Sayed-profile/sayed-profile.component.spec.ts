import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayedProfileComponent } from './sayed-profile.component';

describe('SayedProfileComponent', () => {
  let component: SayedProfileComponent;
  let fixture: ComponentFixture<SayedProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayedProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
