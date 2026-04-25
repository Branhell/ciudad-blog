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
      icono: '🧠',
      lugar: 'Online + Presencial (Bogotá)',
      color: '#10b981'
    },
    {
      titulo: 'Tecnología y Psicología',
      fecha: '5 Julio 2024',
      descripcion: 'Conferencia sobre innovación tecnológica aplicada a la salud mental. Realidad virtual, apps y más.',
      categoria: 'tecnologia',
      categoriaNombre: 'Tecnología',
      icono: '💻',
      lugar: 'Online vía Zoom',
      color: '#3b82f6'
    },
    {
      titulo: 'Mindfulness Digital',
      fecha: '22 Julio 2024',
      descripcion: 'Aprende técnicas de atención plena en la era digital. Workshop práctico con ejercicios guiados.',
      categoria: 'bienestar',
      categoriaNombre: 'Bienestar',
      icono: '🧘',
      lugar: 'Centro OpenPsy - Medellín',
      color: '#8b5cf6'
    },
    {
      titulo: 'Networking Profesional',
      fecha: '10 Agosto 2024',
      descripcion: 'Conecta con psicólogos, tecnólogos y empresas del sector. Oportunidades de colaboración.',
      categoria: 'negocios',
      categoriaNombre: 'Negocios',
      icono: '🤝',
      lugar: 'Hotel Dann Carlton - Bogotá',
      color: '#f59e0b'
    },
    {
      titulo: 'Inteligencia Artificial en Terapia',
      fecha: '25 Agosto 2024',
      descripcion: 'Descubre cómo la IA está transformando la atención psicológica. Casos prácticos y demostraciones.',
      categoria: 'tecnologia',
      categoriaNombre: 'Tecnología',
      icono: '🤖',
      lugar: 'Online',
      color: '#3b82f6'
    },
    {
      titulo: 'Burnout Laboral: Prevención',
      fecha: '5 Septiembre 2024',
      descripcion: 'Taller práctico para empresas sobre cómo prevenir el agotamiento laboral en equipos digitales.',
      categoria: 'bienestar',
      categoriaNombre: 'Bienestar',
      icono: '⚡',
      lugar: 'Online + Presencial',
      color: '#8b5cf6'
    },
    {
      titulo: 'Workshop: Regulación Emocional',
      fecha: '18 Septiembre 2024',
      descripcion: 'Aprende herramientas prácticas para manejar la ansiedad y el estrés en el entorno digital.',
      categoria: 'salud',
      categoriaNombre: 'Salud Mental',
      icono: '💚',
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
      this.mensajeSuscripcion = '✅ ¡Gracias por suscribirte! Recibirás nuestros próximos eventos de OpenPsy.';
      this.emailSuscripcion = '';
      setTimeout(() => this.mensajeSuscripcion = '', 3000);
    } else {
      this.mensajeSuscripcion = '❌ Ingresa un email válido';
      setTimeout(() => this.mensajeSuscripcion = '', 3000);
    }
  }

  irARegistro() {
    window.location.href = 'http://localhost:4200/login';
  }

  irALogin() {
    window.location.href = 'http://localhost:4200/login';
  }

  // Método para obtener ícono según categoría
  getIconoCategoria(categoria: string): string {
    switch(categoria) {
      case 'salud': return 'fas fa-brain';
      case 'tecnologia': return 'fas fa-microchip';
      case 'negocios': return 'fas fa-chart-line';
      case 'bienestar': return 'fas fa-spa';
      default: return 'fas fa-calendar-alt';
    }
  }
}