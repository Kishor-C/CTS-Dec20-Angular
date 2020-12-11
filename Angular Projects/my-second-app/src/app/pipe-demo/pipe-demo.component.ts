import { Component, OnInit } from '@angular/core';
import { Hello } from '../hello/hello';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {
  firstname : string = "Jennifer";
  title : 'F'
  salary : number = 3500;
  dob : Date = new Date("1999-10-15");
  hello1: Hello = new Hello(55, "Hello Message");
}
