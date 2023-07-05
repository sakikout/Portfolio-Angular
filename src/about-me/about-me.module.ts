import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AboutMeComponent } from './about-me.component';
import { AboutMeRoutingModule } from './about-me-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AboutMeComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AboutMeRoutingModule
  ],
  exports: [
    AboutMeComponent
  ]
})
export class AboutMeModule { }
