import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // 👈 importa Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {} // 👈 inyecta Router

  onLogin() {
    console.log('Usuario:', this.username);
    console.log('Contraseña:', this.password);

    // Aquí luego conectamos con el backend usando HttpClient
    // Por ahora simulamos login correcto:
    if (this.username && this.password) {
      // 👇 redirige al dashboard
      this.router.navigate(['/dashboard']);
    } else {
      alert('Por favor ingresa usuario y contraseña');
    }
  }
}
