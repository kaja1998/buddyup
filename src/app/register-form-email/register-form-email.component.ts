import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField } from "@angular/material/form-field";
import { MatOption, MatSelect, MatLabel } from "@angular/material/select";
import {MatInput} from "@angular/material/input";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-register-form-email.component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormField, MatSelect, MatOption, MatLabel, MatInput, MatIconButton, MatIcon],
  templateUrl: './register-form-email.component.html',
  styleUrl: './register-form-email.component.css'
})
export class RegisterFormEmailComponent implements OnInit {

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
  hide = true;

  userForm!: FormGroup;
  //protected readonly FormGroup = FormGroup;
  isFormSubmitted: boolean = false;

  ngOnInit() {
    this.userForm =  new FormGroup({
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      birthDate: new FormControl("",[Validators.required]),
      userName:  new FormControl("",[Validators.required, Validators.minLength(2)]),
      email:  new FormControl("",[Validators.required, Validators.email, Validators.minLength(2)]),
      city: new FormControl("",[Validators.required, Validators.minLength(2)]),
      state: new FormControl("", [Validators.required]),
      zipcode: new FormControl("", [Validators.required, Validators.minLength(4)]),
      isAgree: new FormControl(false, [Validators.required])
    })
  }

  onSubmit() {
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted =  true;
  }
}
