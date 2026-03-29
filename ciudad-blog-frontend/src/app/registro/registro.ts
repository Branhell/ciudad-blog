import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // 👈 AGREGA ESTO

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule], // 👈 Y AQUÍ
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    console.log('Registrando usuario:', this.nombre, this.email, this.password);

    if (this.nombre && this.email && this.password) {
      alert('Registro exitoso, ahora puedes ingresar');
      this.router.navigate(['/login']);
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}