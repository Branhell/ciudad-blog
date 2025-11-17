import { Component } from '@angular/core';

@Component({
  selector: 'app-consultar',
  standalone: true, // 👈 necesario en Angular moderno
  imports: [],
  templateUrl: './consultar.html',
  styleUrls: ['./consultar.css'] // 👈 corregido (plural)
})
export class ConsultarComponent {} // 👈 nombre corregido
