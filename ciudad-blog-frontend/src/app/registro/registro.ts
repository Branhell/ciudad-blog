import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // 👈 necesario para ngModel

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],                      // 👈 habilita ngModel
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class RegistroComponent {
  nombre: string = '';
  email: string = '';
  password: string = '';

  onRegister() {
    console.log('Registrando usuario:', this.nombre, this.email, this.password);
    // Aquí luego conectas con tu backend (POST a localhost:8080/api/usuarios)
  }
}
