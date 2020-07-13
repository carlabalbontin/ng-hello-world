import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentChangePasswordComponent } from './assignment-change-password.component';

describe('AssignmentChangePasswordComponent', () => {
  let component: AssignmentChangePasswordComponent;
  let fixture: ComponentFixture<AssignmentChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentChangePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
