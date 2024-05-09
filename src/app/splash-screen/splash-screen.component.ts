import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [RouterOutlet, MatButton],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})

export class SplashScreenComponent {
  title = 'buddyup';
}
