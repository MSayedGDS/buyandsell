import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoonjhunProfileComponent } from './roonjhun-profile.component';

describe('RoonjhunProfileComponent', () => {
  let component: RoonjhunProfileComponent;
  let fixture: ComponentFixture<RoonjhunProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoonjhunProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoonjhunProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
