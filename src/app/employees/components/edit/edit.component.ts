import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employees/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../../dto/IEmployee';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  employee: IEmployee = {
    id: 0,
    name: '',
    age: 0,
    position: '',
  };

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.searchToId(parseInt(id!)).subscribe((employee) => {
      this.employee = employee;
    });
  }

  editEmployee() {
    this.service.update(this.employee).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
