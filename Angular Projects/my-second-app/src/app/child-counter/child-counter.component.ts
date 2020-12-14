import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.css']
})
export class ChildCounterComponent {

  counter: number = 0;

  @Output()
  childCounter : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  childUserDetail : EventEmitter<any> = new EventEmitter<any>();

  handleClick() {
    this.childCounter.emit(this.counter++);
    this.childUserDetail.emit({"firstname": "Sachin", "lastname": "Tendulkar"});
  }

}
