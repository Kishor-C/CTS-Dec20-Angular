import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent  { 
  id : number = undefined;
  name : string = undefined;
  salary : number = undefined;

  message : string = undefined;

  constructor(private _service : EmployeeService){}

  handleSave(formValue : any) {
    this._service.save(formValue).subscribe(response => this.message = 'Stored '+response.id);
  }
  
}
