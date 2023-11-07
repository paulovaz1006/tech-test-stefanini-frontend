import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  formEmployee!: FormGroup;
  defaultValidation = Validators.compose([
    Validators.required,
    Validators.pattern(/(.|\s)*\S(.|\s)*/),
  ]);

  constructor(
    private service: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildFormBuilder();
  }

  buildFormBuilder() {
    this.formEmployee = this.formBuilder.group({
      name: ['', this.defaultValidation],
      age: ['', this.defaultValidation],
      position: ['', this.defaultValidation],
    });
  }

  createEmployee() {
    this.service.create(this.formEmployee.value).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
}
