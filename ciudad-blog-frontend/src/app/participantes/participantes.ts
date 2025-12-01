import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Participante } from '../models/participante.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-participantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './participantes.html',
  styleUrls: ['./participantes.css']
})
export class ParticipantesComponent implements OnInit {
  participantes: Participante[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getParticipantes().subscribe({
      next: data => this.participantes = data,
      error: err => console.error('Error al cargar participantes', err)
    });
  }
}
