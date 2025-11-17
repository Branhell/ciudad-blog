import { Component } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  standalone: true, // 👈 necesario en Angular moderno
  imports: [],
  templateUrl: './eliminar.html',
  styleUrls: ['./eliminar.css'] // 👈 corregido (plural)
})
export class EliminarComponent {} // 👈 nombre corregido
