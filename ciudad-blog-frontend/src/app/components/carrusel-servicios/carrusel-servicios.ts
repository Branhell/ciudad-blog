import { Component, Input, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrusel-servicios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="swiper-container" #swiperContainer>
      <div class="swiper-wrapper">
        <div class="swiper-slide" *ngFor="let servicio of servicios">
          <div class="carrusel-slide" [routerLink]="['/servicio', servicio.id]">
            <img [src]="servicio.imagen" [alt]="servicio.titulo" class="carrusel-imagen">
            <div class="carrusel-overlay">
              <div class="carrusel-contenido">
                <span class="carrusel-categoria">{{ servicio.categoria }}</span>
                <h3 class="carrusel-titulo">{{ servicio.titulo }}</h3>
                <p class="carrusel-descripcion">{{ servicio.descripcion | slice:0:100 }}...</p>
                <div class="carrusel-meta">
                  <span>💰 {{ servicio.precio }}</span>
                  <span>⏱️ {{ servicio.duracion }}</span>
                </div>
                <span class="carrusel-btn">Ver más →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .swiper-container {
      width: 100%;
      height: 550px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }
    
    .carrusel-slide {
      position: relative;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    
    .carrusel-imagen {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.05);
      transition: transform 8s ease;
    }
    
    .carrusel-slide:hover .carrusel-imagen {
      transform: scale(1.1);
    }
    
    .carrusel-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, transparent 100%);
      padding: 80px 50px 50px;
      color: white;
    }
    
    .carrusel-contenido {
      max-width: 650px;
      animation: fadeInUp 0.8s ease;
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
    
    .carrusel-categoria {
      display: inline-block;
      background: linear-gradient(135deg, var(--eco-primario), var(--eco-secundario));
      color: #0d1f0f;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 6px 16px;
      border-radius: 30px;
      margin-bottom: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    .carrusel-titulo {
      font-size: 2.2rem;
      font-weight: 800;
      margin: 0 0 16px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
      letter-spacing: -0.5px;
    }
    
    .carrusel-descripcion {
      font-size: 1rem;
      opacity: 0.95;
      line-height: 1.6;
      margin: 0 0 20px;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    }
    
    .carrusel-meta {
      display: flex;
      gap: 20px;
      margin-bottom: 24px;
    }
    
    .carrusel-meta span {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(10px);
      padding: 8px 18px;
      border-radius: 40px;
      font-size: 0.9rem;
      font-weight: 600;
      border: 1px solid rgba(255,255,255,0.2);
    }
    
    .carrusel-btn {
      display: inline-block;
      padding: 12px 28px;
      background: linear-gradient(135deg, var(--eco-primario), var(--eco-secundario));
      border-radius: 40px;
      font-size: 0.9rem;
      font-weight: 700;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    
    .carrusel-slide:hover .carrusel-btn {
      transform: translateX(8px);
      box-shadow: 0 8px 25px rgba(0,212,255,0.4);
    }
    
    @media (max-width: 768px) {
      .swiper-container {
        height: 450px;
      }
      
      .carrusel-overlay {
        padding: 50px 25px 30px;
      }
      
      .carrusel-titulo {
        font-size: 1.5rem;
      }
      
      .carrusel-meta {
        flex-wrap: wrap;
        gap: 10px;
      }
      
      .carrusel-meta span {
        font-size: 0.75rem;
        padding: 5px 12px;
      }
    }
  `]
})
export class CarruselServiciosComponent implements AfterViewInit {
  @Input() servicios: any[] = [];

  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    import('swiper').then(({ default: Swiper }) => {
      import('swiper/modules').then(({ Autoplay, EffectFade }) => {
        new Swiper('.swiper-container', {
          modules: [Autoplay, EffectFade],
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          },
          loop: true,
          effect: 'fade',
          speed: 1200,
        });
      });
    });
  }
}