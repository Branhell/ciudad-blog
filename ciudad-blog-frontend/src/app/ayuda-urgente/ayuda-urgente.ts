import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ayuda-urgente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ayuda-urgente.html',
  styleUrls: ['./ayuda-urgente.css']
})
export class AyudaUrgente {
  respiracionActiva = false;
  respiracionTexto = 'Iniciar respiración guiada';
  tiempoRestante = 0;
  intervalo: any;

  contactosEmergencia = [
    { nombre: 'Línea 106', numero: '106', descripcion: 'Atención psicológica gratuita', disponible: '24/7' },
    { nombre: 'Línea Púrpura', numero: '018000112233', descripcion: 'Contra violencia y salud mental', disponible: '24/7' },
    { nombre: 'Cruz Roja', numero: '123', descripcion: 'Emergencias médicas', disponible: '24/7' }
  ];

  recursos = [
    { titulo: '📱 Aplicación Calma', descripcion: 'Ejercicios de respiración guiada', enlace: '#' },
    { titulo: '🧠 MindApp', descripcion: 'Meditaciones breves para crisis', enlace: '#' },
    { titulo: '📞 Chat de Escucha', descripcion: 'Atención por WhatsApp', enlace: '#' }
  ];

  iniciarRespiracion() {
    if (this.respiracionActiva) {
      this.detenerRespiracion();
      return;
    }
    
    this.respiracionActiva = true;
    this.respiracionTexto = 'Respirando... 3';
    let paso = 3;
    
    this.intervalo = setInterval(() => {
      paso--;
      if (paso > 0) {
        this.respiracionTexto = `Respirando... ${paso}`;
      } else if (paso === 0) {
        this.respiracionTexto = '✨ Suelta el aire ✨';
      } else {
        this.detenerRespiracion();
      }
    }, 1000);
  }

  detenerRespiracion() {
    clearInterval(this.intervalo);
    this.respiracionActiva = false;
    this.respiracionTexto = 'Iniciar respiración guiada';
  }
}
