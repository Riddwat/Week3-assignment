import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidEmailPipe } from '../valid-email-pipe';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, ValidEmailPipe],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginError = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginError = 'Please enter your email and password.';
      return;
    }

    this.loginError = '';
    console.log(this.loginForm.value); // { email: '...', password: '...' }
  }
}