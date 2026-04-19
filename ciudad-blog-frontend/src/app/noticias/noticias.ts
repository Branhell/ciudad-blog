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
  .noticias-hero {
    position: relative;
    height: 60vh;
    min-height: 450px;
    overflow: hidden;
    margin-top: 70px;
  }
  .noticias-hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }
  .noticias-hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.3));
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .noticias-hero-content {
    text-align: center;
    color: white;
    z-index: 2;
    padding: 20px;
  }
  .noticias-hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .noticias-hero-content p {
    font-size: 1.2rem;
    margin-bottom: 24px;
  }
  .hero-stats-mini {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  .hero-stats-mini span {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(10px);
    padding: 8px 20px;
    border-radius: 40px;
    font-size: 0.85rem;
  }
  .noticias-section {
    padding: 60px 20px;
    background: linear-gradient(135deg, #667eea, #764ba2);
    min-height: 100vh;
  }
  .noticias-header {
    text-align: center;
    margin-bottom: 50px;
  }
  .noticias-titulo {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 15px;
  }
  .noticias-subtitulo {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.9);
    max-width: 600px;
    margin: 0 auto;
  }
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  .post-card {
    background: #1e293b;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
  }
  .post-card:hover {
    transform: translateY(-5px);
  }
  .post-imagen {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .post-imagen img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .post-contenido-card {
    padding: 20px;
  }
  .post-categoria {
    display: inline-block;
    background: #3b82f6;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    color: white;
    margin-bottom: 10px;
  }
  .post-fecha {
    display: inline-block;
    margin-left: 10px;
    font-size: 0.75rem;
    color: #94a3b8;
  }
  .post-titulo {
    font-size: 1.25rem;
    font-weight: 700;
    margin: 12px 0;
    color: white;
  }
  .post-resumen {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #cbd5e1;
  }
  .post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 0.8rem;
    color: #94a3b8;
  }
  .post-autor, .post-likes {
    color: #94a3b8;
  }
  .post-btn {
    display: inline-block;
    background: #3b82f6;
    color: white;
    text-decoration: none;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 0.85rem;
    transition: all 0.3s ease;
  }
  .post-btn:hover {
    background: #2563eb;
    transform: translateX(5px);
  }
  @media (max-width: 768px) {
    .noticias-hero {
      height: 50vh;
      min-height: 400px;
    }
    .noticias-hero-content h1 {
      font-size: 2rem;
    }
    .posts-grid {
      grid-template-columns: 1fr;
    }
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
