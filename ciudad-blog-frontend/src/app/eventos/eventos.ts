import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './eventos.html',
  styles: [`
    /* Hero Parallax */
    .hero-parallax {
      position: relative;
      height: 70vh;
      min-height: 500px;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
      margin-top: 70px;
    }
    .hero-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      width: 100%;
      padding: 20px;
    }
    .hero-content h1 {
      font-size: 3.5rem;
      margin-bottom: 20px;
      animation: fadeInUp 1s ease;
    }
    .hero-content p {
      font-size: 1.2rem;
      margin-bottom: 30px;
      animation: fadeInUp 1s ease 0.2s both;
    }
    .hero-badge {
      display: inline-block;
      background: rgba(255,255,255,0.2);
      backdrop-filter: blur(10px);
      padding: 10px 24px;
      border-radius: 50px;
      margin: 0 10px;
      animation: fadeInUp 1s ease 0.4s both;
    }
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Pestañas de categorías */
    .tabs-section {
      background: linear-gradient(135deg, #0f172a, #1e293b);
      padding: 40px 20px;
    }
    .tabs-container {
      display: flex;
      justify-content: center;
      gap: 15px;
      flex-wrap: wrap;
      max-width: 800px;
      margin: 0 auto;
    }
    .tab-btn {
      background: rgba(255,255,255,0.1);
      border: none;
      padding: 12px 30px;
      border-radius: 50px;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .tab-btn:hover {
      background: rgba(255,255,255,0.2);
      transform: translateY(-2px);
    }
    .tab-btn.active {
      background: #3b82f6;
      box-shadow: 0 4px 15px rgba(59,130,246,0.4);
    }

    /* Línea de tiempo */
    .timeline-section {
      padding: 80px 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
    }
    .timeline-header {
      text-align: center;
      margin-bottom: 60px;
    }
    .timeline-header h2 {
      font-size: 2.5rem;
      color: white;
      margin-bottom: 15px;
    }
    .timeline-header p {
      color: rgba(255,255,255,0.9);
    }
    .timeline {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 100%;
      background: rgba(255,255,255,0.3);
    }
    .timeline-item {
      position: relative;
      margin-bottom: 50px;
    }
    .timeline-dot {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 20px;
      background: #3b82f6;
      border-radius: 50%;
      border: 3px solid white;
      z-index: 1;
    }
    .timeline-content {
      width: 45%;
      padding: 20px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.2);
      transition: transform 0.3s ease;
    }
    .timeline-content:hover {
      transform: scale(1.02);
      background: rgba(255,255,255,0.15);
    }
    .timeline-item:nth-child(odd) .timeline-content {
      margin-left: auto;
    }
    .timeline-date {
      display: inline-block;
      background: #3b82f6;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      margin-bottom: 12px;
    }
    .timeline-category {
      display: inline-block;
      margin-left: 10px;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.7rem;
    }
    .timeline-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: white;
      margin-bottom: 10px;
    }
    .timeline-desc {
      color: rgba(255,255,255,0.9);
      line-height: 1.6;
    }

    /* Newsletter */
    .newsletter-section {
      padding: 80px 20px;
      background: linear-gradient(135deg, #1e293b, #0f172a);
      text-align: center;
    }
    .newsletter-container {
      max-width: 600px;
      margin: 0 auto;
    }
    .newsletter-section h3 {
      font-size: 2rem;
      color: white;
      margin-bottom: 15px;
    }
    .newsletter-section p {
      color: #94a3b8;
      margin-bottom: 30px;
    }
    .newsletter-form {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .newsletter-input {
      flex: 1;
      min-width: 250px;
      padding: 14px 20px;
      border: none;
      border-radius: 50px;
      background: rgba(255,255,255,0.1);
      color: white;
      font-size: 1rem;
    }
    .newsletter-input::placeholder {
      color: #94a3b8;
    }
    .newsletter-btn {
      background: #3b82f6;
      color: white;
      border: none;
      padding: 14px 30px;
      border-radius: 50px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.3s ease;
    }
    .newsletter-btn:hover {
      background: #2563eb;
      transform: translateX(5px);
    }
    .mensaje-suscripcion {
      margin-top: 20px;
      color: #10b981;
    }

    @media (max-width: 768px) {
      .hero-content h1 { font-size: 2rem; }
      .timeline::before { left: 30px; }
      .timeline-dot { left: 30px; }
      .timeline-content { width: calc(100% - 60px); margin-left: 60px !important; }
      .hero-badge { display: block; margin: 10px; }
    }
  `]
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
      icono: '🧠'
    },
    {
      titulo: 'Tecnología y Psicología',
      fecha: '5 Julio 2024',
      descripcion: 'Conferencia sobre innovación tecnológica aplicada a la salud mental. Realidad virtual, apps y más.',
      categoria: 'tecnologia',
      icono: '💻'
    },
    {
      titulo: 'Mindfulness Digital',
      fecha: '22 Julio 2024',
      descripcion: 'Aprende técnicas de atención plena en la era digital. Workshop práctico con ejercicios guiados.',
      categoria: 'salud',
      icono: '🧘'
    },
    {
      titulo: 'Networking Profesional',
      fecha: '10 Agosto 2024',
      descripcion: 'Conecta con psicólogos, tecnólogos y empresas del sector. Oportunidades de colaboración.',
      categoria: 'negocios',
      icono: '🤝'
    },
    {
      titulo: 'Inteligencia Artificial en Terapia',
      fecha: '25 Agosto 2024',
      descripcion: 'Descubre cómo la IA está transformando la atención psicológica. Casos prácticos y demostraciones.',
      categoria: 'tecnologia',
      icono: '🤖'
    }
  ];

  get eventosTimeline() {
    return this.eventosFiltrados;
  }

  filtrarEventos(categoria: string) {
    this.categoriaActiva = categoria;
  }

  suscribirNewsletter() {
    if (this.emailSuscripcion && this.emailSuscripcion.includes('@')) {
      this.mensajeSuscripcion = '✅ ¡Gracias por suscribirte! Recibirás nuestros próximos eventos.';
      this.emailSuscripcion = '';
      setTimeout(() => this.mensajeSuscripcion = '', 3000);
    } else {
      this.mensajeSuscripcion = '❌ Ingresa un email válido';
      setTimeout(() => this.mensajeSuscripcion = '', 3000);
    }
  }
}
