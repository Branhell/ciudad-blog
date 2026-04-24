import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto {
  formData = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  };

  enviado = false;
  errorEnvio = false;

  enviarMensaje() {
    if (this.formData.nombre && this.formData.email && this.formData.mensaje) {
      this.enviado = true;
      setTimeout(() => {
        this.enviado = false;
        this.formData = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };
      }, 3000);
    } else {
      this.errorEnvio = true;
      setTimeout(() => this.errorEnvio = false, 3000);
    }
  }
}