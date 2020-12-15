import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees : any = [];
  constructor() { }

  store(values : any) : any {
    this.employees.push(values);
  }

  dummyDetails() : any {
    return this.employees;
  }
}
