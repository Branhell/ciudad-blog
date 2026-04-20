import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  posts: Post[] = [];
  loading = true;
  error = false;

  // Orb 1 - Terapia, psicólogos ayudando, bienestar (6 imágenes)

imagenesOrb1: string[] = [
  'https://images.pexels.com/photos/4499012/pexels-photo-4499012.jpeg',   // mano ayudando (ya te gusta)
  'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg',   // psicóloga con paciente (ya te gusta)
  'https://images.pexels.com/photos/6255631/pexels-photo-6255631.jpeg',   // mujer triste / ayuda (ya te gusta)
  'https://images.pexels.com/photos/7447074/pexels-photo-7447074.jpeg',   // pareja con doctor
  'https://images.pexels.com/photos/5234624/pexels-photo-5234624.jpeg',   // tableta / pastilla / profesional
  'https://images.pexels.com/photos/4098274/pexels-photo-4098274.jpeg',   // mujer oficina / sentada
];


imagenesOrb2: string[] = [
  'https://images.pexels.com/photos/7743429/pexels-photo-7743429.jpeg',   // niño triste
  'https://images.pexels.com/photos/6669802/pexels-photo-6669802.jpeg',   // mujer angustiada
  'https://images.pexels.com/photos/7277897/pexels-photo-7277897.jpeg',   // hombre deprimido
  'https://images.pexels.com/photos/7654802/pexels-photo-7654802.jpeg',   // hombre cansado / angustia
  'https://images.pexels.com/photos/5699761/pexels-photo-5699761.jpeg',   // angustia / llanto
  'https://images.pexels.com/photos/7278770/pexels-photo-7278770.jpeg'    // persona sentada / tristeza
];

imagenesOrb3: string[] = [
  'https://images.pexels.com/photos/7699329/pexels-photo-7699329.jpeg',   // mujer de pie / habitación
  'https://images.pexels.com/photos/3356440/pexels-photo-3356440.jpeg',   // escala de grises
  'https://images.pexels.com/photos/4118139/pexels-photo-4118139.jpeg',   // persona sentado
  'https://images.pexels.com/photos/7929738/pexels-photo-7929738.jpeg',   // sentado / deprimido
  'https://images.pexels.com/photos/9895324/pexels-photo-9895324.jpeg',   // pareja / mano / nostalgia
  'https://images.pexels.com/photos/23932023/pexels-photo-23932023.jpeg'   // fotografía B/N
];
	
  constructor(
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 6);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  // Función para redirigir a la página de servicios
  irServicios() {
    this.router.navigate(['/servicios']);
  }

  ngAfterViewInit() {
    // Animaciones GSAP
    gsap.from('.hero-badge', {
      duration: 0.8,
      y: -30,
      opacity: 0,
      ease: 'back.out(1)'
    });

    gsap.from('.hero-titulo', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      delay: 0.2,
      ease: 'power3.out'
    });

    gsap.from('.hero-subtitulo', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.4,
      ease: 'power3.out'
    });

    gsap.from('.hero-acciones', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.6,
      ease: 'power3.out'
    });

    gsap.from('.hero-stats', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.8,
      ease: 'power3.out'
    });
	    // Iniciar carruseles
this.iniciarCarrusel('carrusel1', this.imagenesOrb1.length, 'abajo');
this.iniciarCarrusel('carrusel2', this.imagenesOrb2.length, 'arriba');
this.iniciarCarrusel('carrusel3', this.imagenesOrb3.length, 'abajo');

  }

iniciarCarrusel(id: string, totalImagenes: number, direccion: string = 'abajo') {
  let index = 0;
  const carrusel = document.getElementById(id);
  if (!carrusel) return;

  // Si la dirección es 'arriba', empezamos con el carrusel desplazado
  if (direccion === 'arriba') {
    carrusel.style.transform = `translateY(-${(totalImagenes - 1) * 100}%)`;
    index = totalImagenes - 1;
  }

  setInterval(() => {
    if (direccion === 'abajo') {
      index = (index + 1) % totalImagenes;
      carrusel.style.transform = `translateY(-${index * 100}%)`;
    } else if (direccion === 'arriba') {
      index = (index - 1 + totalImagenes) % totalImagenes;
      carrusel.style.transform = `translateY(-${index * 100}%)`;
    } else if (direccion === 'derecha') {
      index = (index + 1) % totalImagenes;
      carrusel.style.transform = `translateX(-${index * 100}%)`;
    } else if (direccion === 'izquierda') {
      index = (index - 1 + totalImagenes) % totalImagenes;
      carrusel.style.transform = `translateX(-${index * 100}%)`;
    }
  }, 3000);
}

}

