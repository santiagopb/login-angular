import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }      from './pages/home/home.component';
import { DocsComponent } from './pages/docs/docs.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'login', component: LoginComponent}
  /*{ path: '**', redirectTo: 'home', pathMatch: 'full' }*/
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
