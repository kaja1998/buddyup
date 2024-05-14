import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-register-options',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatButton],
  templateUrl: './register-options.component.html',
  styleUrl: './register-options.component.css'
})
export class RegisterOptionsComponent {

}
