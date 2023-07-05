import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTogetherComponent } from './home-together.component';



const routes: Routes = [
  {path: '', component: HomeTogetherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeTogetherRoutingModule { }
