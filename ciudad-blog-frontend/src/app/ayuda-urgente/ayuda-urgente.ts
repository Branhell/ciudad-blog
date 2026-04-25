import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ayuda-urgente',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ayuda-urgente.html',
  styleUrls: ['./ayuda-urgente.css']
})
export class AyudaUrgente implements OnDestroy {
  respiracionActiva = false;
  respiracionTexto = 'Iniciar respiración guiada';
  intervalo: any;

  contactosEmergencia = [
    { nombre: 'Línea 106', numero: '106', descripcion: 'Atención psicológica gratuita', disponible: '24/7' },
    { nombre: 'Línea Púrpura', numero: '018000112233', descripcion: 'Atención contra violencia y salud mental', disponible: '24/7' },
    { nombre: 'Cruz Roja', numero: '123', descripcion: 'Emergencias médicas', disponible: '24/7' }
  ];

  recursos = [
    { titulo: 'Aplicación Calma', descripcion: 'Ejercicios de respiración guiada', enlace: '#' },
    { titulo: 'MindApp', descripcion: 'Meditaciones breves para crisis', enlace: '#' },
    { titulo: 'Chat de Escucha', descripcion: 'Atención por WhatsApp', enlace: '#' }
  ];

  getIconoRecurso(titulo: string): string {
    if (titulo.includes('Calma')) return 'fas fa-cloud-moon';
    if (titulo.includes('MindApp')) return 'fas fa-brain';
    return 'fab fa-whatsapp';
  }

  iniciarRespiracion() {
    if (this.respiracionActiva) {
      this.detenerRespiracion();
      return;
    }

    this.respiracionActiva = true;
    this.respiracionTexto = 'Respirando...';
    
    setTimeout(() => {
      if (this.respiracionActiva) {
        this.detenerRespiracion();
        this.respiracionTexto = '✨ Respiración completada ✨';
        setTimeout(() => {
          this.respiracionTexto = 'Iniciar respiración guiada';
        }, 2000);
      }
    }, 4000);
  }

  detenerRespiracion() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
    this.respiracionActiva = false;
  }

  irAlInicio() {
    window.location.href = '/';
  }

  ngOnDestroy() {
    this.detenerRespiracion();
  }
}