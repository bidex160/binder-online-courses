import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputType } from '../index.model';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss'],
})
export class AppInputComponent implements OnInit {
  /**
   * button type
   */
  @Input() type: InputType;
  /**
   * form control name
   */
  @Input() name: string;
  /**
   * input label
   */
  @Input() label: string;
  /**
   * input placeholder
   */
  @Input() placeholder: string = '';
  /**
   * formgroup to assign reactive formcontrol to input
   */
  @Input() form: FormGroup;
  /**
   * to make input required for user
   */
  @Input() required: boolean = false;
  /**
   * to make input readonly for user
   */
  @Input() readonly: boolean = false;
  /**
   * it is applicable to radio and checkbox for multiple choice answer
   */
  @Input() multipleChoice: boolean = false;
  /**
   * it is applicable to select input to format value field from options
   */
  @Input() valueField: string;
  /**
   * it is applicable to select input to format lable field from options
   */
  @Input() labelField: string;

  @Input() inputIcon: string;
  /**
   * input max length
   */
  @Input() maxlength: string;

  __option: any[] = [];
  /**
   * select dropdowm options
   * it format the raw options to desired output
   * assign the formatted options to __option
   */
  @Input('options') set _option(v: any[]) {
    this.__option = this.formatOption(v);
  }
  __value: string | number;

  /**
   * default / initial value for input
   * assign the value to __value
   */
  @Input('mvalue') set _value(v: string | number) {
    this.__value = v;
  }
  /**
   * to switch select dropdown state
   */
  focused: boolean = false;
  /**
   * to toggle password value
   */
  showPassword: boolean = false;
  /**
   * output input change event
   */
  @Output() mchange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  /**
   * get if radio / checkbox is checked if value is passed
   */
  get isChecked() {
    if (this.multipleChoice)
      return this.form?.controls[this.name]?.value
        ?.toLowerCase()
        ?.includes(this.__value.toString().toLowerCase());
    else return this.__value == this.form?.controls[this.name]?.value;
  }

  /**
   * format select options e.g label and value from option object
   * @param options select dropdwon options
   * @returns formatted options
   */
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

  /**
   * handle input change
   * @param event input event on input changed
   * @returns
   */
  inputChange(event: any) {
    if (this.type == 'radio' || this.type == 'checkbox') {
      let value = this.multipleChoice
        ? this.form.controls[this.name].value
          ? `${this.form.controls[this.name].value}, ${event.__value}`
          : `${event.__value}`
        : event.__value;

      this.mchange.emit(value);

      this.form.controls[this.name].patchValue(value);
      return;
    }
    if (this.type == 'select') {
      if (event.target.value) this.mchange.emit(event.target.value);
      return;
    }

    this.mchange.emit(event.target.value);
    this.__value = this.form.controls[this.name].value;
  }

  /**
   * handle option select
   * @param event on select event from dropdown
   */
  onSelect(event: any) {
    let value = event.value;
    this.mchange.emit(value);
    let patch: any = {};
    patch[this.name] = value;
    this.form.patchValue(value);
    this.focused = !this.focused;
  }
}
