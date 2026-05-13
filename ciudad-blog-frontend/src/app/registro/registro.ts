import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';
  mensaje: string = '';
  loading: boolean = false;
  mostrarPassword: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  onRegister() {
    if (!this.nombre || !this.email || !this.password) {
      this.mensaje = 'Por favor completa todos los campos';
      return;
    }

    if (!this.email.includes('@')) {
      this.mensaje = 'El email no es válido';
      return;
    }

    if (this.password.length < 8) {
      this.mensaje = 'La contraseña debe tener al menos 8 caracteres';
      return;
    }

    this.loading = true;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { nombre: this.nombre, email: this.email, password: this.password };

    this.http.post('https://ciudad-blog-production.up.railway.app/api/usuarios', body, { headers }).subscribe({
      next: () => {
        this.loading = false;
        this.mensaje = '✅ Registro exitoso. Redirigiendo al login...';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: (err) => {
        this.loading = false;
        this.mensaje = err.error?.mensaje || 'Error al registrar. Intenta de nuevo.';
      }
    });
  }
}