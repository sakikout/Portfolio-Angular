import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  {path: 'index', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), redirectTo: ''},
  {path: 'home', loadChildren: () => import('./home-together/home-together.module').then((m) => m.HomeTogetherModule)},
  {path: 'about-me', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule)},
  {path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path: 'projects', loadChildren: () => import('./arts/arts/arts.module').then(m => m.ArtsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
