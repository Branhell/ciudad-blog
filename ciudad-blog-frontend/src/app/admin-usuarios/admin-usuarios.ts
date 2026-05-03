import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-usuarios.html',
  styleUrl: './admin-usuarios.css'
})
export class AdminUsuariosComponent implements OnInit {
  usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'test@gmail.com', rol: 'PACIENTE', fechaRegistro: '2025-03-01' },
    { id: 2, nombre: 'Laura Martínez', email: 'laura.martinez@ecobits.com', rol: 'ADMIN', fechaRegistro: '2025-02-15' },
    { id: 3, nombre: 'Carlos Herrera', email: 'carlos.herrera@ecobits.com', rol: 'PROFESIONAL', fechaRegistro: '2025-02-20' },
    { id: 4, nombre: 'Ana Sofía Ríos', email: 'ana.rios@ecobits.com', rol: 'PACIENTE', fechaRegistro: '2025-03-10' },
    { id: 5, nombre: 'Sebastián Torres', email: 'sebastian.torres@ecobits.com', rol: 'PACIENTE', fechaRegistro: '2025-03-15' },
    { id: 6, nombre: 'Valentina Cruz', email: 'valentina.cruz@ecobits.com', rol: 'PACIENTE', fechaRegistro: '2025-03-20' }
  ];

  constructor() { }

  ngOnInit(): void { }
}