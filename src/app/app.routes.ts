import { Routes } from '@angular/router';
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";
import { AppComponent } from "./app.component";

export const routes: Routes = [
  { path: 'start', component: SplashScreenComponent },
  { path: 'home', component: AppComponent }
];
