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
  irAContacto() {
    window.location.href = '/contacto';
  }
}