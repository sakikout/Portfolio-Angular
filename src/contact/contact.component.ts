import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseFormComponent } from '../shared/forms/base-form/base-form.component';
import { Observable, map } from 'rxjs';
import { FormValidations } from '../shared/forms/form-validation';
import { CrudService } from '../shared/crud-service';
import { User } from '../shared/user';
import { AlertModalService } from '../shared/alert-modal.service';
import { Location } from '@angular/common';
import { ServiceCrud } from '../shared/service-crud/service-crud.component';
import { FadeInOut } from '../shared/fade-animation';

@Component({
  selector: 'contact-me',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  preserveWhitespaces: true,
  animations: [FadeInOut(200, 300, true)]
})
export class ContactComponent extends BaseFormComponent implements OnInit{

    users$!: Observable<User[]>;

  constructor(private cd: ChangeDetectorRef,
    private formBuilder: FormBuilder,
    private modal: AlertModalService,
    private http: HttpClient,
    private service: ServiceCrud,
    private location: Location){
      super();
  }

  override ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      firstName:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(64)]],
      email: [null, [Validators.email, Validators.required]],
      message: [null, [Validators.required, Validators.minLength(100) , Validators.maxLength(1000)]]
    }
    );

    this.users$ = this.service.list();
  }

  ngDoCheck(){
    this.cd.detectChanges();
  }

  override submit() {
    this.service.create(this.form.value).subscribe(
      (success: any) => {
        setTimeout(() => this.location.back(), 3000);
        this.modal.showAlertSuccess('Submitted: ', `Contact sucessfully sent to me! Awaits for reponse.`);
        ;
      },
      (error: any) => this.modal.showAlertDanger('Error: ', 'It was not possible to sent your request. Try again later.'),
      () => console.log('Request create completed')
    );
  }

  checkError(campo:any, error: string){
    var teste = FormValidations.hasError(campo, error);
   
    return teste;
   
   }
}
