import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showLoginForm: boolean = true; // Gibt an, ob das Anmeldeformular sichtbar ist
  showRegisterForm: boolean = false; // Gibt an, ob das Registrierungsformular sichtbar ist
  showLoginButton: boolean = false;
  showRegisterButton: boolean = true;
  toggleForms(): void {
    this.showLoginForm = !this.showLoginForm;
    this.showRegisterForm = !this.showRegisterForm;
    this.showLoginButton = !this.showLoginButton;
    this.showRegisterButton = !this.showRegisterButton;
  }

}
