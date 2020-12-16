import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  employees : any = undefined;

  constructor(private _service : EmployeeService){
  }

  refresh() : void {
    this._service.fetchEmployees()
    .subscribe(response => this.employees = response);
  }
}
