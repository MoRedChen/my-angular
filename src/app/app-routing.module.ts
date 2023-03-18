import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'show',
    component: ShowComponent
  },
  {
    path: 'error_404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: 'error_404',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
