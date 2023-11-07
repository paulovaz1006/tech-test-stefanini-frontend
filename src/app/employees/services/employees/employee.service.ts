import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IEmployee } from '../../dto/IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly API = ' http://localhost:3000/employees';
  constructor(private http: HttpClient) {}

  list(page: number, filter: string): Observable<IEmployee[]> {
    const itemsToPage = 4;
    let params = new HttpParams().set('_page', page).set('_limit', itemsToPage);

    if (filter.trim().length > 1) {
      params = params.set('q', filter);
    }

    return this.http.get<IEmployee[]>(this.API, { params });
  }

  create(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(this.API, employee);
  }

  delete(id: number): Observable<IEmployee> {
    const url = `${this.API}/${id}`;

    return this.http.delete<IEmployee>(url);
  }

  update(employee: IEmployee): Observable<IEmployee> {
    const url = `${this.API}/${employee.id}`;
    return this.http.put<IEmployee>(url, employee);
  }

  searchToId(id: number) {
    const url = `${this.API}/${id}`;
    return this.http.get<IEmployee>(url);
  }
}
