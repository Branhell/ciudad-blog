import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Autor {
  nombre: string;
  avatar?: string;
}

export interface NoticiaPost {
  id: number;
  titulo: string;
  contenido: string;
  categoria: string;
  fecha: Date;
  autor: Autor;
  likes: number;
  imagen?: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './noticias.html',
  styles: [`
    .posts-grid {
      display: block !important;
      padding: 20px !important;
      background: linear-gradient(135deg, #667eea, #764ba2) !important;
    }
    .post-card {
      background: #1e293b !important;
      border-radius: 20px !important;
      padding: 20px !important;
      margin-bottom: 30px !important;
    }
    .post-titulo, .post-resumen, .post-autor, .post-likes, .post-fecha, .post-categoria {
      color: white !important;
    }
    .post-btn {
      background: #3b82f6 !important;
      color: white !important;
      padding: 8px 20px !important;
      border-radius: 20px !important;
      text-decoration: none !important;
    }
    .noticias-titulo, .noticias-subtitulo {
      color: white !important;
    }
    .post-imagen img {
      width: 100% !important;
      height: 200px !important;
      object-fit: cover !important;
    }
  `]
})
export class NoticiasComponent implements OnInit {
  posts: NoticiaPost[] = [];
  loading = true;
  error = false;

  ngOnInit() {
    this.cargarNoticias();
  }

  cargarNoticias() {
    this.posts = [
      {
        id: 1,
        titulo: 'La tecnología y su impacto en la salud mental',
        contenido: 'Exploramos cómo las redes sociales y el uso constante de dispositivos afectan nuestro bienestar psicológico.',
        categoria: 'Psicología',
        fecha: new Date('2024-03-15'),
        autor: { nombre: 'Dra. María González', avatar: '' },
        likes: 45
      },
      {
        id: 2,
        titulo: 'Nuevas apps de meditación impulsadas por IA',
        contenido: 'La inteligencia artificial está revolucionando la forma en que practicamos mindfulness.',
        categoria: 'Tecnología',
        fecha: new Date('2024-03-10'),
        autor: { nombre: 'Carlos Méndez', avatar: '' },
        likes: 32
      },
      {
        id: 3,
        titulo: 'Cómo crear hábitos digitales saludables',
        contenido: 'Pequeños cambios en tu rutina tecnológica pueden mejorar tu calidad de vida.',
        categoria: 'Bienestar',
        fecha: new Date('2024-03-05'),
        autor: { nombre: 'Laura Fernández', avatar: '' },
        likes: 67
      }
    ];
    this.loading = false;
  }

  getImagenPorCategoria(categoria: string): string {
    const imagenes: { [key: string]: string } = {
      'Psicología': 'assets/psicologia.jpg',
      'Tecnología': 'assets/tecnologia.jpg',
      'Bienestar': 'assets/bienestar.jpg'
    };
    return imagenes[categoria] || 'assets/default-noticia.jpg';
  }
}
