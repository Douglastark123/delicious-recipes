import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  constructor(private router: Router) {}

  passwordIsHidden = true;
  formData = {
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  }

  getEmailErrorMessage() {
    if (this.formData.email.hasError('required')) {
      return 'Campo email é obrigatório.'
    }
    
    if (this.formData.email.hasError('email')) {
      return 'Por favor, insira um endereço de e-mail válido.'
    }

    return this.formData.email.hasError('email') ? 'email inválido':'';
  }
  
  getPasswordErrorMessage() {
    if (this.formData.password.hasError('required')) {
      return 'Campo senha é obrigatório'
    }
    
    if (this.formData.password.hasError('minlength')) {
      return 'Minimo de 8 caracteres'
    }
    
    if (this.formData.password.hasError('maxlength')) {
      return 'Máximo de 16 caracteres'
    }

    return this.formData.password.hasError('required') ? 'senha inválida':'';
  }

  private async signup(user: {
    email: string,
    password: string
  }) {
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: 'POST',
        headers: {
          'content-type':	'application/json; charset=utf-8'
        },
        body: JSON.stringify(user),
      })
      
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log('Signup successful:', data);
    } catch (e) {
      console.error(e);
    }
  }

  private isFormValid(): boolean {
    return this.formData.email.valid && this.formData.password.valid;
  }

  async onSubmit() {
    if (this.isFormValid()) {
      await this.signup({
        email: this.formData.email.value as string,
        password: this.formData.password.value as string,
      })

      this.router.navigate(['/signin'])
    }
    return;
  }
}
