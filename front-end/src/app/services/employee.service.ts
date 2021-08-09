import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  URL_API = 'http://localhost:4000/api/employees';

  employees: IEmployee[] = [];
  selectedEmployee: IEmployee = {
    _id: '',
    name: '',
    office: '',
    position: '',
    salary: 0,
  };

  constructor(private http: HttpClient) {}

  getEmployees(): any {
    return this.http.get<IEmployee[]>(this.URL_API);
  }

  createEmployee(employee: IEmployee): any {
    return this.http.post(this.URL_API, employee);
  }

  deleteEmployee(id: string): any {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
