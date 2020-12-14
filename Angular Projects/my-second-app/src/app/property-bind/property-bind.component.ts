import { Component} from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent {
  isDisabled: boolean = true;
  isHidden: boolean = false;
  handleClick() {
    this.isDisabled = !this.isDisabled;
    this.isHidden = !this.isHidden;
  }
}
