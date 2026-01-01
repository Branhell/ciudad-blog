import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { CommonModule } from '@angular/common'; // 👈 importa esto

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule], // 👈 agrégalo aquí
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  onLogin() {
    this.usuarioService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.mensaje = response.mensaje;

        if (response.mensaje === 'Login correcto') {
          this.router.navigate(['/dashboard']);
          localStorage.setItem('usuarioEmail', this.username);
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.mensaje = 'Credenciales inválidas';
        } else {
          this.mensaje = 'Error en el servidor';
        }
      }
    });
  }
}
