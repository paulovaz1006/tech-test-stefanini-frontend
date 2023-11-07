import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employees/employee.service';
import { IEmployee } from '../../dto/IEmployee';
import { Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  listEmployess: IEmployee[] = [];
  currentPage = 1;
  hasMoreEmployee = true;
  filter = '';
  getDataIdEmployee: number | undefined;
  unsub = new Subject();

  constructor(private service: EmployeeService) {}

  ngOnInit(): void {
    this.service
      .list(this.currentPage, this.filter)
      .pipe(takeUntil(this.unsub))
      .subscribe((listEmployess) => {
        this.listEmployess = listEmployess;
      });
  }

  ngOnDestroy(): void {
    this.unsub.next(true);
    this.unsub.complete();
  }

  showMoreEmployee() {
    this.service
      .list(++this.currentPage, this.filter)
      .pipe(takeUntil(this.unsub))
      .subscribe((listEmployess) => {
        if (!listEmployess.length) this.hasMoreEmployee = false;

        this.listEmployess.push(...listEmployess);
      });
  }

  getEmployee() {
    this.hasMoreEmployee = true;
    this.currentPage = 1;
    this.service
      .list(this.currentPage, this.filter)
      .pipe(takeUntil(this.unsub))
      .subscribe((listEmployess) => {
        this.listEmployess = listEmployess;
      });
  }

  deleteEmployee(event: number) {
    this.getDataIdEmployee = event;
    this.service
      .delete(this.getDataIdEmployee)
      .pipe(takeUntil(this.unsub))
      .subscribe(() => {
        const filterEmployee = this.listEmployess.filter(
          (employee) => employee.id !== this.getDataIdEmployee
        );
        this.listEmployess = filterEmployee;

        if (!this.listEmployess.length) {
          this.hasMoreEmployee = false;
        }
      });
  }
}
