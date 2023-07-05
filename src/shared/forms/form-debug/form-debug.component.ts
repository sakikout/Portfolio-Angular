import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.scss']
})
export class FormDebugComponent {

  @Input('formGroup') formGroup!: FormGroup;
  @Input ('form') form !: NgForm;
  @Input ('formGroupDirective') formDirective !: FormGroupDirective;

}
