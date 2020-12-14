import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.css']
})
export class ParentCounterComponent {
  size : number = undefined;

  user : any = {};

}
