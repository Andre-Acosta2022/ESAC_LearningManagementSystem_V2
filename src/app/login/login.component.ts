import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword = false;
  loading = false;
  currentYear: number;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      rememberMe: [false]
    });

    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    // Comprobar si hay credenciales guardadas
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      this.loginForm.patchValue({
        username: savedUsername,
        rememberMe: true
      });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    const passwordField = document.getElementById('password') as HTMLInputElement;
    if (passwordField) {
      passwordField.type = this.showPassword ? 'text' : 'password';
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // Simular proceso de autenticación
    setTimeout(() => {
      const { username, password, rememberMe } = this.loginForm.value;
      
      // Guardar usuario si "Recordar mi cuenta" está marcado
      if (rememberMe) {
        localStorage.setItem('username', username);
      } else {
        localStorage.removeItem('username');
      }
      
      // Aquí iría la lógica real de autenticación
      console.log('Iniciando sesión con:', { username, password });
      
      // Redirigir al dashboard
      this.router.navigate(['/dashboard']);
      this.loading = false;
    }, 1500);
  }
}