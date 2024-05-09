import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from "./splash-screen/splash-screen.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SplashScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'buddyup';
}
