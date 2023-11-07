import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { EmployeesComponent } from './employees.component';
import { ButtonShowEmployeeComponent } from './components/list/button-show-employee/button-show-employee.component';
import { EditComponent } from './components/edit/edit.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    CardComponent,
    EmployeesComponent,
    ButtonShowEmployeeComponent,
    EditComponent,
  ],
  exports: [EmployeesComponent],

  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class EmployeesModule {}
