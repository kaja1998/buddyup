import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import {RegisterComponent} from "./register/register.component";
import {SplashScreenComponent} from "./splash-screen/splash-screen.component";
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: SplashScreenComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent }
];
