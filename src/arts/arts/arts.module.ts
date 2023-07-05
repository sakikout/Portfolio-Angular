import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ArtsComponent } from '../arts.component';
import { ArtsRoutingModule } from './arts-routing.module';



@NgModule({
  declarations: [
    ArtsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ArtsRoutingModule
  ],
  providers: [

  ],
  exports: [

  ]
})
export class ArtsModule { }
