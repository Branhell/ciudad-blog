import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './servicios.html',
  styleUrls: ['./servicios.css']
})
export class Servicios implements OnInit {
  servicios: any[] = [];
  loading = true;
  error = false;

  slideActual: number = 0;
  intervalo: any;

  ngOnInit(): void {
    this.cargarServicios();
    this.iniciarCarrusel();
  }

  cargarServicios() {
    setTimeout(() => {
      this.servicios = [
        {
          id: 1,
          titulo: 'Psicoterapia Online',
          descripcion: 'Sesiones de terapia personalizada con psicólogos especializados en tecnología y bienestar digital.',
          categoria: 'Terapia',
          precio: '$40.000 COP',
          duracion: '50 min',
          imagen: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg'
        },
        {
          id: 2,
          titulo: 'Programa Adicción Digital',
          descripcion: 'Plan estructurado de 8 semanas para recuperar el control sobre el uso de redes sociales.',
          categoria: 'Tratamiento',
          precio: '$280.000 COP',
          duracion: '8 semanas',
          imagen: 'https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg'
        },
        {
          id: 3,
          titulo: 'Bienestar Corporativo',
          descripcion: 'Servicios de salud mental para empresas: evaluaciones, talleres y consultas privadas.',
          categoria: 'Empresarial',
          precio: 'Cotizar',
          duracion: 'Plan mensual',
          imagen: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
        },
        {
          id: 4,
          titulo: 'Terapia con Realidad Virtual',
          descripcion: 'Tratamiento innovador para ansiedad y fobias usando entornos virtuales controlados.',
          categoria: 'Innovación',
          precio: '$60.000 COP',
          duracion: '60 min',
          imagen: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg'
        },
        {
          id: 5,
          titulo: 'Evaluación de Bienestar Digital',
          descripcion: 'Análisis completo de tu relación con la tecnología. Recibe un plan personalizado.',
          categoria: 'Evaluación',
          precio: '$35.000 COP',
          duracion: '45 min',
          imagen: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg'
        }
      ];
      this.loading = false;
    }, 500);
  }

  iniciarCarrusel() {
    if (this.intervalo) clearInterval(this.intervalo);
    this.intervalo = setInterval(() => {
      this.slideSiguiente();
    }, 5000);
  }

  slideSiguiente() {
    if (this.servicios.length > 0) {
      this.slideActual = (this.slideActual + 1) % this.servicios.length;
    }
  }

  slideAnterior() {
    if (this.servicios.length > 0) {
      this.slideActual = (this.slideActual - 1 + this.servicios.length) % this.servicios.length;
    }
  }

  irASlide(index: number) {
    this.slideActual = index;
  }

  getIconForService(categoria: string): string {
    const iconos: { [key: string]: string } = {
      'Terapia': '🧠',
      'Tratamiento': '📱',
      'Empresarial': '🏢',
      'Innovación': '🥽',
      'Evaluación': '📊'
    };
    return iconos[categoria] || '✨';
  }
}