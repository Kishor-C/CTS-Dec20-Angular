import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  id : number = undefined;
  password : string = undefined;
  constructor(private _service : EmployeeService, private _router : Router) {}
  
  handleLogin(loginValues : any) {
    //we had to call authenticate to hit the rest end point
    this._service
    .authenticate(loginValues.id, loginValues.password)
    .subscribe(response => {
      console.log(response); 
      if(response.id != undefined)
        this._router.navigate(["success", loginValues.id]);
    });
  }
}
