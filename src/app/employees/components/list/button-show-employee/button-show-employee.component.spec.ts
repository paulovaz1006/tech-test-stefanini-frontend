import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowEmployeeComponent } from './button-show-employee.component';

describe('ButtonShowEmployeeComponent', () => {
  let component: ButtonShowEmployeeComponent;
  let fixture: ComponentFixture<ButtonShowEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonShowEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonShowEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
