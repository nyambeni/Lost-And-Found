import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {AdminLostNFoundComponent} from './admin-lost-n-found/admin-lost-n-found.component';
import {UpdateComponent} from './update/update.component';
import {FoundComponent} from './found/found.component';
import {LostComponent} from './lost/lost.component';
import { from } from 'rxjs';



const routes: Routes = [
  {path: "" , component: NavbarComponent},
  {path: "login" , component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landing-page' , component: LandingPageComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'admin-lost-n-found' , component: AdminLostNFoundComponent},
  {path: 'update' , component: UpdateComponent},
  {path: 'found' , component: FoundComponent},
  {path: 'lost' , component: LostComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
export const routingComponents = { NavbarComponent,LoginComponent,RegisterComponent, LandingPageComponent, ForgotPasswordComponent, AdminLostNFoundComponent , UpdateComponent, FoundComponent, LostComponent}
