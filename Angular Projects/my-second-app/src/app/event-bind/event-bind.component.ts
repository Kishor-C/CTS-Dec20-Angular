import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent {

  username: string = undefined;
  password: string = undefined;
  
  handleClick(user: string, pass: string) : void{
    this.username = user;
    this.password = pass;
  }

}
