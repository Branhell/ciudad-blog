import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quienes-somos.html',
  styleUrls: ['./quienes-somos.css']
})
export class QuienesSomos {
  equipo = [
    { nombre: 'Bryan Roboan', rol: 'Fundador & CEO', descripcion: 'Visionario de la psicología tecnológica', icono: '🚀' },
    { nombre: 'Dra. María González', rol: 'Directora de Psicología', descripcion: 'Experta en neuropsicología clínica', icono: '🧠' },
    { nombre: 'Carlos Méndez', rol: 'CTO', descripcion: 'Arquitecto de soluciones IA y RV', icono: '💻' },
    { nombre: 'Laura Fernández', rol: 'Bienestar Digital', descripcion: 'Especialista en mindfulness tecnológico', icono: '🧘' }
  ];

  valores = [
    { titulo: 'Innovación', descripcion: 'Exploramos nuevas fronteras entre tecnología y mente', icono: '💡' },
    { titulo: 'Empatía', descripcion: 'Ponemos a las personas en el centro', icono: '💚' },
    { titulo: 'Excelencia', descripcion: 'Buscamos lo mejor para nuestra comunidad', icono: '⭐' },
    { titulo: 'Confianza', descripcion: 'Datos seguros, relaciones transparentes', icono: '🔒' }
  ];
}
