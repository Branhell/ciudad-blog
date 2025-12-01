import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eliminar.html',
  styleUrls: ['./eliminar.css']
})
export class EliminarComponent {
  id: number = 0;
  mensaje: string = '';

  constructor(private usuarioService: UsuarioService) {}

  eliminar(): void {
    this.usuarioService.deleteParticipante(this.id).subscribe({
      next: () => this.mensaje = `Participante con ID ${this.id} eliminado correctamente.`,
      error: err => this.mensaje = `Error al eliminar participante: ${err.message}`
    });
  }
}
