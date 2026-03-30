import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';
import { AuthService } from '../services/auth.service'; // 🔑 Importamos AuthService

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  mensaje: string = '';
  isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private authService: AuthService   // 🔑 Inyectamos AuthService
  ) {}

  ngOnInit() {
    const user = localStorage.getItem('usuarioEmail');
    this.isLoggedIn = !!user;
  }

  onLogin() {
    if (this.username && this.password) {
      // Llamamos al backend vía UsuarioService
      this.usuarioService.login(this.username, this.password).subscribe({
        next: (res) => {
          this.mensaje = res.mensaje;
          this.isLoggedIn = true;

          // 🔑 Usamos AuthService para actualizar estado global y navbar
          this.authService.login(this.username, res.token);

          // Redirigimos al dashboard
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.mensaje = err.error?.mensaje || 'Error en login';
          this.isLoggedIn = false;
        }
      });
    } else {
      this.mensaje = 'Completa los campos';
    }
  }
}