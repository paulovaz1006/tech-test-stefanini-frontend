import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-show-employee',
  templateUrl: './button-show-employee.component.html',
  styleUrls: ['./button-show-employee.component.scss'],
})
export class ButtonShowEmployeeComponent implements OnInit {
  @Input() hasMoreEmployee: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
