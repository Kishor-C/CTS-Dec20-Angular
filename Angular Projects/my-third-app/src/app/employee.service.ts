import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees : any = [];
  // HttpClient can call online API's
  constructor(private _http : HttpClient) { }

  fetchUsers() : Observable<any> {
    let uri = "https://jsonplaceholder.typicode.com/users";
    return this._http.get(uri);
  }

  store(values : any) : any {
    this.employees.push(values);
  }

  dummyDetails() : any {
    return this.employees;
  }


}
