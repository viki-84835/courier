import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { WorkComponent } from './work/work.component';
import { ProcessComponent } from './process/process.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: '/home' },
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent},
  { path:'forgotpass',component:ForgotpassComponent},
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'service',component:ServiceComponent},
  { path:'work',component:WorkComponent},
  { path:'process',component:ProcessComponent},
  { path:'contact',component:ContactComponent}

];

export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
