import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form-email.component',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register-form-email.component.html',
  styleUrl: './register-form-email.component.css'
})
export class RegisterFormEmailComponent implements OnInit {

  userForm!: FormGroup;
  //protected readonly FormGroup = FormGroup;
  isFormSubmitted: boolean = false;

  ngOnInit() {
    this.userForm =  new FormGroup({
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required, Validators.minLength(2)]),
      userName:  new FormControl("",[Validators.required, Validators.minLength(2)]),
      email:  new FormControl("",[Validators.required, Validators.email, Validators.minLength(2)]),
      city: new FormControl("",[Validators.required, Validators.minLength(2)]),
      state: new FormControl("", [Validators.required]),
      zipcode: new FormControl("", [Validators.required]),
      isAgree: new FormControl(false, [Validators.required])
    })
  }

  onSubmit() {
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted =  true;
  }
}
