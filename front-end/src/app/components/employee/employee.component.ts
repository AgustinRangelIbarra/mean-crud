import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { faEdit, faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { IEmployee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  editIcon = faEdit;
  userMinusIcon = faUserMinus;

  constructor(public _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this._employeeService.getEmployees().subscribe(
      (res: any) => {
        this._employeeService.employees = res;
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  addEmployee(form: NgForm): any {
    console.log(form.value);

    this._employeeService.createEmployee(form.value).subscribe(
      (res: any) => {
        console.log(res);
        this.getEmployees();
        form.reset();
      },
      (err: any) => console.error(err)
    );
  }

  deleteEmployee(employeeId: any): any {
    console.log(employeeId);
    const confirmDelete = confirm('Are you sure you want to delete the user');
    if (confirmDelete) {
      this._employeeService.deleteEmployee(employeeId).subscribe(
        (res: any) => {
          console.log(res);
          this.getEmployees();
        },
        (err: any) => console.log(err)
      );
    }
  }

  editEmployee(employee: any): any {
    this._employeeService.selectedEmployee = employee;
  }

  resetForm(formEmployee: NgForm): any {
    formEmployee.reset();
  }
}
