import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputType } from '../index.model';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
})
export class AppInputComponent implements OnInit {
  @Input() inpCl: string;
  @Input() type: InputType;
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() form: FormGroup;
  @Input() required: boolean = false;
  @Input() readonly: boolean = false;
  @Input() valueField: string;
  @Input() labelField: string;
  @Input() inputIcon: string;
  @Input() grayborder: boolean = false;
  __option: any[] = [];
  @Input('options') set _option(v: any[]) {
    this.__option = this.formatOption(v);
  }
  __value: string | number;
  @Input('mvalue') set _value(v: string | number) {
    this.__value = v;
  }
  focused: boolean = false;
  showPassword: boolean = false;
  @Output() mchange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  formatOption = (options: any[]) => {
    let format = options.map((r, i) => {
      let value;
      let label;
      if (this.valueField) value = r[this.valueField];
      if (this.labelField) label = r[this.labelField];

      if (this.valueField && label)
        return {
          value: value,
          label: label,
        };
      else
        return {
          value: options[i],
          label: options[i],
        };
    });
    return format;
  };

  inputChange(event: any) {
    if (this.type == 'select') {
      if (event.target.value) this.mchange.emit(event.target.value);
      return;
    }

    this.mchange.emit(event.target.value);
    this.__value = this.form.controls[this.name].value;
  }

  onSelect(value: any) {
    this.mchange.emit(value);
    let patch: any = {};
    patch[this.name] = value;
    this.form.patchValue(patch);
    this.focused = !this.focused;
  }
}
