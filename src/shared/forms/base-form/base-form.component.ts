import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'base-form',
  template: '<div></div>'
})
export abstract class BaseFormComponent {

  form!: FormGroup;
  submitted : boolean = false;

  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  abstract submit(): any;

  onSubmit(){
    if (this.form.valid){
      this.submit();
    } else {
      console.log('Formulario Invalido');
      this.verifyForm(this.form)
    }

  }

  resetar(){
    this.form.reset();
  }

  verifyForm(formGroup: FormGroup | FormArray){
    Object.keys(formGroup.controls).forEach((field: any) =>{
      var control = formGroup.get(field);
      if (control instanceof FormGroup || control instanceof FormArray){
        this.verifyForm(control);
      }
      control?.markAsTouched();
    })
  }


  onCancel(){
    this.submitted = false;
    this.form.reset();

  }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

  aplicaClassInput(field: string){
    return {
      'is-invalid':  this.hasError(field) && this.validTouched(field),
      'is-valid':  !this.hasError(field) && this.validTouched(field)
    };
  }

  aplicaClassError(field: string){
    return {
      'invalid-feedback': this.hasError(field) && this.validTouched(field)
    };
  }

  aplicaClassValid(field: string){
    return {
      'valid-feedback': !this.hasError(field) && this.validTouched(field)
    };
  }

  validTouched(field: string){
    var formField = this.form.get(field);

    if(formField?.touched || formField?.dirty){
      return true
    } else if (formField?.untouched && formField?.pristine){
      return false;
    }
    return false;
  }

  isValid(field: string){
    var formField = this.form.get(field);

    if( formField?.invalid && formField?.touched){

      return false;

    } else if (formField?.valid && formField?.touched){
      return true;

    } else if(formField?.invalid && formField?.untouched && formField?.dirty){

      return false;

    } else if(formField?.invalid && formField?.untouched && formField?.pristine){

      return true;

    } else if (formField?.pristine && formField?.untouched){
      return true;

    } else if (formField?.valid && formField?.untouched){
      return true;

    } else if (formField?.pristine && formField?.touched){
      return false;

    }

    return false;
  }

  isFieldEmpty(field: string){
    var formField = this.form.get(field);

    if (formField?.value == '' || formField?.value == null){
      return true;
    }

    return false;
  }

}
