import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { CreateComponent } from './employees/components/create/create.component';
import { EditComponent } from './employees/components/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employees',
    pathMatch: 'full',
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'create-employee',
    component: CreateComponent,
  },
  {
    path: 'edit-employee/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
