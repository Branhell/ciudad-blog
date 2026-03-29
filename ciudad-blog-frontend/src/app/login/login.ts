import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { CommonModule } from '@angular/common';

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

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit() {
    const user = localStorage.getItem('usuarioEmail');
    this.isLoggedIn = !!user;
  }

onLogin() {
  console.log("CLICK LOGIN");

  if (this.username && this.password) {

    localStorage.setItem('usuarioEmail', this.username);

    this.mensaje = 'Login correcto';

    this.router.navigate(['/dashboard']).then(() => {
      window.location.reload();
    });

  } else {
    this.mensaje = 'Completa los campos';
  }
}
}