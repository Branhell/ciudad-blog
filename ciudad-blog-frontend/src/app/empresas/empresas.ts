import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empresas.html',
  styleUrls: ['./empresas.css']
})
export class EmpresasComponent {
  
  irALogin() {
    window.location.href = 'http://localhost:4200/login';
  }
  
  irAContactoEmpresa() {
    window.location.href = 'http://localhost:4200/contacto?tipo=empresa';
  }
}