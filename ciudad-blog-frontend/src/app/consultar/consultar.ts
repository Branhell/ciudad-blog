import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Participante } from '../models/participante.model';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consultar.html',
  styleUrls: ['./consultar.css']
})
export class ConsultarComponent {
  participante?: Participante;
  id: number = 0;

  constructor(private usuarioService: UsuarioService) {}

  consultar(): void {
    this.usuarioService.getParticipanteById(this.id).subscribe({
      next: data => this.participante = data,
      error: err => console.error('Error al consultar participante', err)
    });
  }
}
