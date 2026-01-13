import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Participante } from '../models/participante.model';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './actualizar.html',
  styleUrls: ['./actualizar.css']
})
export class ActualizarComponent {
  participante?: Participante;
  id: number = 0;

  constructor(private usuarioService: UsuarioService) {}

  buscar(): void {
    this.usuarioService.getParticipanteById(this.id).subscribe({
      next: data => this.participante = data,
      error: err => console.error('Error al cargar participante', err)
    });
  }

  actualizar(): void {
    if (this.participante) {
      this.usuarioService.updateParticipante(this.id, this.participante).subscribe({
        next: data => {
          this.participante = data;
          console.log('Participante actualizado correctamente');
        },
        error: err => console.error('Error al actualizar participante', err)
      });
    }
  }
}
