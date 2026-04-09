import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  mensaje: string = '';
  exito: boolean = false;

  enviar(form: any) {
    if (form.valid) {
      this.mensaje = '✅ Mensaje enviado correctamente. Te responderemos pronto.';
      this.exito = true;
      form.reset();
      setTimeout(() => {
        this.mensaje = '';
        this.exito = false;
      }, 5000);
    }
  }
}