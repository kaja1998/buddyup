import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-register-form-email',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './register-form-email.component.html',
  styleUrl: './register-form-email.component.css'
})
export class RegisterFormEmailComponent {

}
