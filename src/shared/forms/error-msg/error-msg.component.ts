import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormControl, FormGroup,  } from '@angular/forms';
import { FormValidations } from '../form-validation';

@Component({
  selector: 'errorMsg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})

export class ErrorMsgComponent
 {
  //@Input() mostrarErro!: boolean;
  //@Input() msgErro!: String;

  @Input() control!: FormControl;
  @Input() fieldName!: string;
  @Input() form!: FormGroup;

  constructor(private cd: ChangeDetectorRef){

  }

  ngOnInit(): void {

  }

  ngDoCheck(){
    this.cd.detectChanges();
  }

  get errorMessage(){

    if (this.form){
      var name = this.fieldName.toLowerCase();
      var field = this.form.get(name);

      for(let propertyName in field?.errors){
        if (field?.errors.hasOwnProperty(propertyName) &&
        field?.touched){
          return FormValidations.getErrorMsg(this.fieldName, propertyName,
            field?.errors[propertyName]);
        }
      }
    }

    return null;
  }


}
