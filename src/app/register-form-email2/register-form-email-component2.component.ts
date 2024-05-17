import {Component, OnInit} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-register-form-email.component',
  templateUrl: './register-form-email-component2.component.html',
  styleUrl: './register-form-email-component2.component.css',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule, NgIf, MatOption, MatSelect, NgForOf, MatCheckbox, MatDatepickerInput, MatDatepickerToggle, MatDatepicker],
})
export class RegisterFormEmailComponent2 implements OnInit {

  /*Hide password toggle*/
  hide = true;

  /*Values for states drop down*/
  states: String[] = [
    "Bayern",
    "Baden-Württemberg",
    "Berlin",
    "Brandenburg",
    "Bremen",
    "Hamburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein-Westfalen",
    "Saarland",
    "Sachsen-Anhalt",
    "Sachsen",
    "Schleswig-Holstein",
    "Thüringen",
    "Rheinland-Pfalz"
  ];

  /*FormGroup for form validation*/
  //protected readonly FormGroup = FormGroup;
  userForm!: FormGroup;
  isFormSubmitted: boolean = false;

  ngOnInit() {
    this.userForm =  new FormGroup({
      firstName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      lastName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      birthDate: new FormControl("",[Validators.required]),
      userName:  new FormControl("",[Validators.required, Validators.minLength(2)]),
      email:  new FormControl("",[Validators.required, Validators.email, Validators.minLength(2)]),
      city: new FormControl("",[Validators.required, Validators.minLength(2)]),
      state: new FormControl("", [Validators.required]),
      zipcode: new FormControl("", [Validators.required, Validators.minLength(4)]),
      password: new FormControl("", [Validators.required, Validators.minLength(4)]),
      passwordRepetition: new FormControl("", [Validators.required]),
      isAgree: new FormControl(false, [Validators.required])
    })
  }

  onSubmit() {
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted =  true;
  }
}
