import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ArtsComponent } from '../arts.component';

const routes: Routes = [
  {path: '', component: ArtsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtsRoutingModule { }
