import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {
  name = "Alexandar";
  phone = 9988223311;
  customerInfo = {"id":12345, "dob":"1990-10-11", "name":"Bruce"};
}
