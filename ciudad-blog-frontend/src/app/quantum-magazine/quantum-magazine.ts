import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quantum-magazine',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quantum-magazine.html',
  styleUrls: ['./quantum-magazine.css']
})
export class QuantumMagazine {
  articulos = [
    { titulo: 'Realidad Virtual para tratar fobias', descripcion: 'Cómo la VR está revolucionando la psicología', tag: 'Tecnología', icono: '🥽' },
    { titulo: 'El futuro de la terapia con IA', descripcion: 'Algoritmos que entienden emociones', tag: 'Innovación', icono: '🤖' },
    { titulo: 'Mindfulness en el metaverso', descripcion: 'Meditación en mundos virtuales', tag: 'Bienestar', icono: '🧘' },
    { titulo: 'Neurociencia cuántica', descripcion: 'La conciencia desde la física cuántica', tag: 'Ciencia', icono: '⚛️' },
    { titulo: 'Psicodelia terapéutica', descripcion: 'Nuevos horizontes en salud mental', tag: 'Vanguardia', icono: '🌈' },
    { titulo: 'Deepfake y salud mental', descripcion: 'El impacto de la IA en la identidad', tag: 'Ética', icono: '🎭' }
  ];

  suscribirNewsletter(email: string) {
    if (email && email.includes('@')) {
      alert('✨ ¡Bienvenido/a al futuro! Revisa tu correo cuántico.');
    } else {
      alert('❌ Ingresa un email válido para viajar al quantum');
    }
  }
}
