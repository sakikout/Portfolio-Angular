import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true
};

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACESSOR]
})

export class InputFieldComponent implements OnInit, ControlValueAccessor{

  @Input() classeCSSInput !: any;
  @Input() classeCSSCampo !: any;
  @Input('id') id !: string;
  @Input() label !: string;
  @Input() type : string = 'text';
  @Input() form !: any;
  @Input() fieldName !: any;
  @Input() condition !: boolean;
  @Input('formControlName') formControlName!: any;
  @Input ('formGroup') formGroup !: any;
  @Input() isReadOnly = false;
  @Input('placeholder') placeholder!: string;

  private innerValue!:any;

  get value(){
    return this.innerValue;
  }

  set value(v:any){
    if (v !== this.innerValue){
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  constructor(){
  }

  onChangeCb: ( _: any) => void = () => {};
  onTouchedCb: ( _: any) => void = () => {};

  writeValue(v: any): void {
   this.value = v;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
   this.onTouchedCb  = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
   this.isReadOnly = isDisabled;
  }



  ngOnInit(): void {

  }

  printarInputs(){
    console.log(this.classeCSSCampo);
    console.log(this.classeCSSInput);
    console.log(this.id);
    console.log(this.label);
    console.log(this.form);
    console.log(this.fieldName);
    console.log(this.formControlName);
    console.log(this.condition);
  }

}
