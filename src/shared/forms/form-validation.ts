import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";

export class FormValidations {

  static requiredMinCheckboxValidator(min: number, controle: string)
  : Validators {

    const validator = (formArray: FormArray) => {
      const totalChecked = formArray.controls
      .map((v: any) => { v.value })
      .reduce(((total:any, current:any) => current ? total + current : total), 0);

    return (control: AbstractControl): ValidationErrors | null =>
    totalChecked >= min ? { noOptionMarked: true } : null;

    };

    return validator;

  }

  static requiredMinCheckbox(min = 1){
    const validator = (formArray: FormArray) => {
      /*
      let values = formArray.controls;
      let totalChecked = 0;
      for (let i = 0; i < values.length; i++){
        if (values[i].value){
          totalChecked += 1;
        }
      }
       */
      const totalChecked = formArray.controls.map((v: any) => v.value)
      .reduce(((total, current) => current ? total + current : total), 0);

      return totalChecked >= min ? null : { required: true };
    };

    return validator;
  }

  static equalsTo(otherField: string){
    function validator(formControl: FormControl) {
      if (otherField == null) {
        throw new Error('É necessário informar um campo.');
      }

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      const field = (<FormGroup>formControl.root).get(otherField);

      if (!field) {
        throw new Error('É necessário informar um campo válido.');
      }

      if (field.value !== formControl.value) {
        return field.value !== formControl.value ? { equalsTo: otherField } : null ;
      }

      return null;
    }

    return validator;
  }

  static termsNotAccepted(field: string){
    function validator(formControl: FormControl) {

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
      return null;
      }

      let formField = (<FormGroup>formControl.root).get(field);

      if (!formField) {
        throw new Error('Campo não encontrado');
      }

        return formField?.errors ? null : { termsNotAccepted: true};
    }

    return validator;
  }

  static hasErrorRequired(field: string){
    function validator(formControl: FormControl) {

      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
      return null;
      }

    let form = (<FormGroup>formControl.root).get(field)?.getError('required');

      if(form && FormValidations.verificaIsNull(field)){
      return true;
      }

    return false;
    }

    return validator;
  }

  static hasError(campo: FormControl , error: string){
      if (!campo.root || !(<FormGroup>campo.root).controls) {
        throw new Error('Controle não encontrado.')
      }
      let form = (<FormGroup>campo.root);
      let campoNome = this.getControlName(campo)?.toString();
      let formError = form.get(campoNome)?.getError(error);

        if(formError){
        return true;
        }

        return false;
  }

  static verificaIsNull(campo: any){

      if (!campo.root || !(<FormGroup>campo.root).controls) {
      return null;
      }

      let formCampo = (<FormGroup>campo.root).get(campo);
      if (formCampo?.value != ''){
        return true;
      }
      return false;


  }


static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any){

  const config: any = {
  'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
  'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
  'emailInvalido': 'Email já cadastrado.',
  'equalsTo': 'A entrada dada é diferente da informada.',
  'termsNotAccepted': 'Você deve concordar antes de submeter o formulário.',
  'required': `${fieldName} é obrigatório.`
  };

    return config[validatorName];

}

 static getControlName = (control: AbstractControl) =>
  {
      var controlName = null;
      var parent = control["_parent"];

      // only such parent, which is FormGroup, has a dictionary
      // with control-names as a key and a form-control as a value
      if (parent instanceof FormGroup)
      {
          // now we will iterate those keys (i.e. names of controls)
          Object.keys(parent.controls).forEach((name) =>
          {
              // and compare the passed control and
              // a child control of a parent - with provided name (we iterate them all)
              if (control === parent.controls[name])
              {
                  // both are same: control passed to Validator
                  //  and this child - are the same references
                  controlName = name;
              }
          });
      }
      if(controlName == null){
        controlName = '';
      }
      // we either found a name or simply return null
      return controlName;
  }

}
