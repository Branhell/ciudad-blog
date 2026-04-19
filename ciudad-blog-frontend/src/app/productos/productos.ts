import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class Productos implements OnInit {
  productos: any[] = [];
  loading = true;
  error = false;

  ngOnInit() {
    setTimeout(() => {
      this.productos = [
        // ========== CAPA CIENCIA 🟢 ==========
        {
  id: 1,
  titulo: 'Seguimiento Emocional',
  descripcion: 'Gráficas interactivas para tracking de emociones.',
  capa: 'ciencia',
  precio: 'Gratis',
  imagen: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg',
  enlace: '/dashboard',  // ← esto lleva al dashboard (requiere login)
  rating: 5
},
        {
          id: 2,
          titulo: 'Diario de Bienestar',
          descripcion: 'Ejercicios de regulación emocional y hábitos diarios con IA.',
          capa: 'ciencia',
          precio: 'Gratis',
          imagen: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg',
          enlace: '/registro',
          rating: 5
        },
        {
          id: 3,
          titulo: 'Guía de Respiración',
          descripcion: 'Técnicas de respiración guiada para reducir ansiedad (PDF descargable).',
          capa: 'ciencia',
          precio: 'Gratis',
          imagen: 'https://images.pexels.com/photos/6893585/pexels-photo-6893585.jpeg',
          enlace: '/assets/guias/respiracion.pdf',
          rating: 4
        },
        
        // ========== CAPA FILOSOFÍA 🟡 ==========
        {
          id: 4,
          titulo: 'Guía de Yin Yang',
          descripcion: 'Encuentra el equilibrio en tu vida diaria. Filosofía aplicada.',
          capa: 'filosofia',
          precio: 'Gratis',
          imagen: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
          enlace: '/assets/guias/yinyang.pdf',
          rating: 5
        },
        {
          id: 5,
          titulo: 'Budismo Aplicado',
          descripcion: 'Śūnyatā, Karuna y Anatta para el bienestar emocional.',
          capa: 'filosofia',
          precio: '$15.000 COP',
          imagen: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
          enlace: 'https://wa.me/573001112233?text=Quiero%20el%20libro%20de%20Budismo%20Aplicado',
          rating: 5
        },
        
        // ========== CAPA SENSORIAL 🔵 ==========
        {
          id: 6,
          titulo: 'Cuencos Tibetanos',
          descripcion: 'Audios de alta calidad para meditación profunda (MP3 descargable).',
          capa: 'sensorial',
          precio: '$25.000 COP',
          imagen: 'https://images.pexels.com/photos/7207734/pexels-photo-7207734.jpeg',
          enlace: '/assets/audios/cuencos.zip',
          rating: 5
        },
        {
          id: 7,
          titulo: 'Aceite de Lavanda',
          descripcion: 'Aromaterapia para relajación profunda y mejor sueño.',
          capa: 'sensorial',
          precio: '$35.000 COP',
          imagen: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg',
          enlace: 'https://wa.me/573001112233?text=Quiero%20el%20aceite%20de%20lavanda',
          rating: 4
        },
        {
          id: 8,
          titulo: 'Cuenco Tibetano Físico',
          descripcion: 'Instrumento original para meditación y sanación. Envíos a todo el país.',
          capa: 'sensorial',
          precio: '$120.000 COP',
          imagen: 'https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg',
          enlace: 'https://wa.me/573001112233?text=Quiero%20el%20cuenco%20tibetano',
          rating: 5
        }
      ];
      this.loading = false;
    }, 500);
  }

  getProductosByCapa(capa: string) {
    return this.productos.filter(p => p.capa === capa);
  }
  
  getStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }
}