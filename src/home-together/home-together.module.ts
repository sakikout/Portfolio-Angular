import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTogetherComponent } from './home-together.component';
import { HomeTogetherRoutingModule } from './home-together-routing.module';
import { HomeModule } from '../home/home.module';
import { AboutMeModule } from '../about-me/about-me.module';
import { ContactModule } from '../contact/contact.module';



@NgModule({
  declarations: [
    HomeTogetherComponent
  ],
  imports: [
    CommonModule,
    HomeTogetherRoutingModule,
    HomeModule,
    AboutMeModule,
    ContactModule
  ]
})
export class HomeTogetherModule { }
