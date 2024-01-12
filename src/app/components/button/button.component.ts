import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonType } from '../index.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Output() mclick: EventEmitter<any> = new EventEmitter();
  @Input() text: string = '';
  @Input() color: string = 'primary';
  @Input('type') set _type(v: ButtonType | undefined) {
    switch (v) {
      case 'primary':
        this._mclass = 'btn btn-primary';
        break;
      case 'secondary':
        this._mclass = 'btn btn-outline-primary';
        break;
      case 'outline':
        this._mclass = 'btn btn-outline-primary';
        break;
      case 'danger':
        this._mclass = 'btn btn-danger';
        break;
      case 'success':
        this._mclass = 'btn btn-success ';
        break;
      default:
        this._mclass = 'primary';
        break;
    }
  }
  @Input() mclass: string;
  _mclass: string;

  constructor() {}

  click() {
    this.mclick.emit();
  }
}
