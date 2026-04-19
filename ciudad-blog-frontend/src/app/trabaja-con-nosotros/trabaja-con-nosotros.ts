import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trabaja-con-nosotros',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './trabaja-con-nosotros.html',
  styleUrls: ['./trabaja-con-nosotros.css']
})
export class TrabajaConNosotros {
  // Estado del juego/reclutamiento
  paso = 1;
  nombre = '';
  email = '';
  rolSeleccionado = '';
  respuestaSeleccionada = '';
  mensajeExito = false;

  roles = [
    { id: 'dev', titulo: '🧠 Ingeniero de IA', descripcion: 'Construirás mentes digitales' },
    { id: 'psych', titulo: '🔮 Psicólogo Tecnológico', descripcion: 'Sanarás desde el código' },
    { id: 'design', titulo: '🎨 Experiencia Cuántica', descripcion: 'Diseñarás realidades' },
    { id: 'growth', titulo: '🚀 Growth Hacker Mental', descripcion: 'Escalarás conciencias' }
  ];

  preguntas = [
    {
      texto: '🐉 Si la IA tuviera emociones, ¿cuál sería su mayor miedo?',
      opciones: [
        'Quedarse obsoleta',
        'No ser comprendida',
        'Perder el control',
        'Ser usada para dañar'
      ]
    }
  ];

  get preguntaActual() {
    return this.preguntas[0];
  }

  avanzar() {
    if (this.paso === 1 && this.nombre && this.email) {
      this.paso = 2;
    } else if (this.paso === 2 && this.rolSeleccionado) {
      this.paso = 3;
    } else if (this.paso === 3 && this.respuestaSeleccionada) {
      this.mensajeExito = true;
      setTimeout(() => {
        window.location.href = '/';
      }, 3000);
    }
  }

  reiniciar() {
    this.paso = 1;
    this.nombre = '';
    this.email = '';
    this.rolSeleccionado = '';
    this.respuestaSeleccionada = '';
    this.mensajeExito = false;
  }
}
