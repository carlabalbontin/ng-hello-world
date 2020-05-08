import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapListGroupComponent } from './bootstrap-list-group.component';

describe('BootstrapListGroupComponent', () => {
  let component: BootstrapListGroupComponent;
  let fixture: ComponentFixture<BootstrapListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapListGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
