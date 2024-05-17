import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import {RegisterOptionsComponent} from "./register-options/register-options.component";
import {SplashScreenComponent} from "./splash-screen/splash-screen.component";
import { LoginComponent } from './login/login.component';
import {RegisterFormEmailComponent} from "./register-form-email/register-form-email.component";
import {RegisterFormEmailComponent2} from "./register-form-email2/register-form-email-component2.component";

export const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'register-options', component: RegisterOptionsComponent },
  { path: 'register-form-email', component: RegisterFormEmailComponent },
  { path: 'register-form-email2', component: RegisterFormEmailComponent2 },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent }
];
