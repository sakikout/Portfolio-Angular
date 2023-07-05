import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { AlertModalService } from './alert-modal.service';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

import { FormDebugComponent } from './forms/form-debug/form-debug.component';
import { ErrorMsgComponent } from './forms/error-msg/error-msg.component';
import { InputFieldComponent } from './forms/input-field/input-field.component';
import { BaseFormComponent } from './forms/base-form/base-form.component';
import { ServiceCrud } from './service-crud/service-crud.component';
import { SocialMediasButtonComponent } from './social-medias-button/social-medias-button.component';
import { ButtonGlowComponent } from './button-glow/button-glow.component';



@NgModule({
  declarations: [
    AlertModalComponent,
    ConfirmModalComponent,
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent,
    SocialMediasButtonComponent,
    ButtonGlowComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertModalComponent,
    ConfirmModalComponent,
    SocialMediasButtonComponent,
    ButtonGlowComponent
  ],
  entryComponents: [
    AlertModalComponent, 
    ConfirmModalComponent
  ],
  providers: [
    AlertModalService,
    ServiceCrud
   
  ]
})
export class SharedModule { }
