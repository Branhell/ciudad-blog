import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.css']
})
export class EventosComponent {
  categoriaActiva = 'todos';
  mensajeSuscripcion = '';
  emailSuscripcion = '';

  eventosFiltrados = [
    {
      titulo: 'Semana de la Salud Mental',
      fecha: '15 - 20 Junio 2024',
      descripcion: 'Charlas, talleres y actividades para promover el bienestar emocional. Contaremos con expertos nacionales e internacionales.',
      categoria: 'salud',
      categoriaNombre: 'Salud Mental',
      icono: '??',
      lugar: 'Online + Presencial (Bogota)',
      color: '#10b981'
    },
    {
      titulo: 'Tecnologia y Psicologia',
      fecha: '5 Julio 2024',
      descripcion: 'Conferencia sobre innovacion tecnologica aplicada a la salud mental. Realidad virtual, apps y mas.',
      categoria: 'tecnologia',
      categoriaNombre: 'Tecnologia',
      icono: '??',
      lugar: 'Online via Zoom',
      color: '#3b82f6'
    },
    {
      titulo: 'Mindfulness Digital',
      fecha: '22 Julio 2024',
      descripcion: 'Aprende tecnicas de atencion plena en la era digital. Workshop practico con ejercicios guiados.',
      categoria: 'bienestar',
      categoriaNombre: 'Bienestar',
      icono: '??',
      lugar: 'Centro OpenPsy - Medellin',
      color: '#8b5cf6'
    },
    {
      titulo: 'Networking Profesional',
      fecha: '10 Agosto 2024',
      descripcion: 'Conecta con psicologos, tecnologos y empresas del sector. Oportunidades de colaboracion.',
      categoria: 'negocios',
      categoriaNombre: 'Negocios',
      icono: '??',
      lugar: 'Hotel Dann Carlton - Bogota',
      color: '#f59e0b'
    },
    {
      titulo: 'Inteligencia Artificial en Terapia',
      fecha: '25 Agosto 2024',
      descripcion: 'Descubre como la IA esta transformando la atencion psicologica. Casos practicos y demostraciones.',
      categoria: 'tecnologia',
      categoriaNombre: 'Tecnologia',
      icono: '??',
      lugar: 'Online',
      color: '#3b82f6'
    },
    {
      titulo: 'Burnout Laboral: Prevencion',
      fecha: '5 Septiembre 2024',
      descripcion: 'Taller practico para empresas sobre como prevenir el agotamiento laboral en equipos digitales.',
      categoria: 'bienestar',
      categoriaNombre: 'Bienestar',
      icono: '?',
      lugar: 'Online + Presencial',
      color: '#8b5cf6'
    },
    {
      titulo: 'Workshop: Regulacion Emocional',
      fecha: '18 Septiembre 2024',
      descripcion: 'Aprende herramientas practicas para manejar la ansiedad y el estres en el entorno digital.',
      categoria: 'salud',
      categoriaNombre: 'Salud Mental',
      icono: '??',
      lugar: 'Online',
      color: '#10b981'
    }
  ];

  get eventosTimeline() {
    if (this.categoriaActiva === 'todos') {
      return this.eventosFiltrados;
    }
    return this.eventosFiltrados.filter(e => e.categoria === this.categoriaActiva);
  }

  filtrarEventos(categoria: string) {
    this.categoriaActiva = categoria;
  }

  suscribirNewsletter() {
    if (this.emailSuscripcion && this.emailSuscripcion.includes('@')) {
      this.mensajeSuscripcion = '? !Gracias por suscribirte! Recibiras nuestros proximos eventos de OpenPsy.';
      this.emailSuscripcion = '';
      setTimeout(() => this.mensajeSuscripcion = '', 3000);
    } else {
      this.mensajeSuscripcion = '? Ingresa un email valido';
      setTimeout(() => this.mensajeSuscripcion = '', 3000);
    }
  }

  irARegistro() {
    window.location.href = 'http://localhost:4200/login';
  }

  irALogin() {
    window.location.href = 'http://localhost:4200/login';
  }
}