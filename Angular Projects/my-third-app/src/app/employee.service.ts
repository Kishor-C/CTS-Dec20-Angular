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

  // formValue must have id, name & salary properties
  save(formValue : any) : Observable<any> {
    let uri = "http://localhost:9090/spring-mvc-demo/spring/api/save";
    return this._http.post(uri, formValue);
  }
  authenticate(id : number, password : string) : Observable<any> {
    let uri = `http://localhost:9090/spring-mvc-demo/spring/api/${id}/${password}`;
    return this._http.post(uri, {});
  }

  fetchEmployees() : Observable<any> {
    let uri = "http://localhost:9090/spring-mvc-demo/spring/api/employees";
    return this._http.get(uri);
  }

  login(id : number, password: string) : boolean {
    if((id == 1000 || id == 2000) && password == 'angular') {
      return true;
    } else {
      return false;
    }
  }

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
