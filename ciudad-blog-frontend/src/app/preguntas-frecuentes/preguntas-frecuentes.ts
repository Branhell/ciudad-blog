import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preguntas-frecuentes.html',
  styleUrls: ['./preguntas-frecuentes.css']
})
export class PreguntasFrecuentes {
  preguntas = [
    { id: 1, abierta: false, pregunta: '¿Qué es OpenPsy?', respuesta: 'OpenPsy es una plataforma de bienestar digital que explora cómo las tecnologías avanzadas (IA, RV, neuropsicología) afectan la mente humana, ofreciendo herramientas para el bienestar psicológico.' },
    { id: 2, abierta: false, pregunta: '¿Es gratis?', respuesta: 'Sí, tenemos un plan gratuito con funcionalidades básicas. También ofrecemos planes Premium y Empresarial con beneficios adicionales.' },
    { id: 3, abierta: false, pregunta: '¿Necesito ser psicólogo para usar la plataforma?', respuesta: 'No. OpenPsy está diseñada para todo público: desde personas que buscan bienestar digital hasta profesionales de la salud mental.' },
    { id: 4, abierta: false, pregunta: '¿Cómo funciona el sistema de recompensas?', respuesta: 'Ganas puntos al participar en la comunidad, completar ejercicios de bienestar y consumir contenido. Los puntos los canjeas por descuentos o contenido exclusivo.' },
    { id: 5, abierta: false, pregunta: '¿Dónde están alojados mis datos?', respuesta: 'Tus datos están en servidores seguros en la nube con cifrado de extremo a extremo. Cumplimos con estándares internacionales de privacidad.' },
    { id: 6, abierta: false, pregunta: '¿Puedo ser profesional aliado?', respuesta: 'Sí. Regístrate como profesional, valida tu perfil y podrás ofrecer servicios, crear contenido y acceder al foro privado de expertos.' }
  ];

  togglePregunta(id: number) {
    this.preguntas = this.preguntas.map(p => ({
      ...p,
      abierta: p.id === id ? !p.abierta : false
    }));
  }

  irAContacto() {
    window.location.href = '/contacto';
  }
}