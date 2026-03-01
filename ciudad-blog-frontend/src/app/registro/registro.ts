import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, RouterLink],   // 👈 agrega RouterLink
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}   // 👈 inyecta Router

  onRegister() {
    console.log('Registrando usuario:', this.nombre, this.email, this.password);

    if (this.nombre && this.email && this.password) {
      // Simulación de registro correcto
      alert('Registro exitoso, ahora puedes ingresar');
      this.router.navigate(['/login']);   // 👈 redirige al login
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}
