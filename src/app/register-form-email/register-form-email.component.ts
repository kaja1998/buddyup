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
      lastName: new FormControl("",[Validators.required,Validators.minLength(4)]),
      userName:  new FormControl("",[Validators.required,Validators.email]),
      city: new FormControl(""),
      state: new FormControl(""),
      zipcode: new FormControl(""),
      isAgree: new FormControl(false)
    })
  }

  onSubmit() {
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted =  true;
  }
}
