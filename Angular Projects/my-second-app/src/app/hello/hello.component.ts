import { Component, OnInit } from '@angular/core';
import { Hello } from './hello'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent  {
  hello1: Hello = new Hello(1, "First Message");
  hello2: Hello = new Hello(2, "Second Message");
}
