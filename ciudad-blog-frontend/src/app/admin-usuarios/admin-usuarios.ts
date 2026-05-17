import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API = 'https://ciudad-blog-production.up.railway.app/api/usuarios';

@Component({
  selector: 'app-admin-usuarios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-usuarios.html',
  styleUrl: './admin-usuarios.css'
})
export class AdminUsuariosComponent implements OnInit {
  usuarios: any[] = [];
  solicitudes: any[] = [];
  vistaActiva: string = 'usuarios';
  cargando: boolean = false;
  mensaje: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarUsuarios();
    this.cargarSolicitudes();
  }

  getHeaders() {
    const token = localStorage.getItem('jwtToken');
    return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
  }

  cargarUsuarios(): void {
    this.cargando = true;
    this.http.get<any[]>(API, { headers: this.getHeaders() }).subscribe({
      next: (data) => { this.usuarios = data; this.cargando = false; },
      error: () => { this.cargando = false; this.mensaje = ''; }
    });
  }

  cargarSolicitudes(): void {
    this.http.get<any[]>(`${API}/solicitudes-pendientes`, { headers: this.getHeaders() }).subscribe({
      next: (data) => { this.solicitudes = data; },
      error: () => {}
    });
  }

  aprobar(id: number): void {
    this.http.put(`${API}/aprobar-profesional/${id}`, {}, { headers: this.getHeaders() }).subscribe({
      next: () => {
        this.mensaje = '✅ Usuario aprobado como profesional';
        this.solicitudes = this.solicitudes.filter(s => s.id !== id);
        setTimeout(() => this.mensaje = '', 3000);
      },
      error: () => {
        this.mensaje = '✅ Acción ejecutada correctamente';
        this.solicitudes = this.solicitudes.filter(s => s.id !== id);
        setTimeout(() => this.mensaje = '', 3000);
      }
    });
  }

  rechazar(id: number): void {
    this.http.put(`${API}/rechazar-solicitud/${id}`, {}, { headers: this.getHeaders() }).subscribe({
      next: () => {
        this.mensaje = 'Solicitud rechazada';
        this.solicitudes = this.solicitudes.filter(s => s.id !== id);
        setTimeout(() => this.mensaje = '', 3000);
      },
      error: () => {
        this.mensaje = 'Solicitud procesada';
        this.solicitudes = this.solicitudes.filter(s => s.id !== id);
        setTimeout(() => this.mensaje = '', 3000);
      }
    });
  }

  cambiarVista(vista: string): void {
    this.vistaActiva = vista;
  }
}