import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [CommonModule, RouterLink],
templateUrl: './pacientes.html',
  styleUrl: './pacientes.css'
})
export class PacientesComponent implements OnInit {
  pacientes = [
    { id: 1, nombre: 'Ana Sofía Ríos', email: 'ana.rios@ecobits.com', ultimaCita: '2025-04-15' },
    { id: 2, nombre: 'Sebastián Torres', email: 'sebastian.torres@ecobits.com', ultimaCita: '2025-04-10' },
    { id: 3, nombre: 'Valentina Cruz', email: 'valentina.cruz@ecobits.com', ultimaCita: '2025-04-05' },
    { id: 4, nombre: 'Andrés Morales', email: 'andres.morales@ecobits.com', ultimaCita: '2025-03-28' },
    { id: 5, nombre: 'Camila Vargas', email: 'camila.vargas@ecobits.com', ultimaCita: '2025-03-20' }
  ];

  constructor() { }

  ngOnInit(): void { }
}