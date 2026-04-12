import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChartComponent } from '../components/chart/chart';
import { EstadisticasService } from '../services/estadisticas.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, ChartComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  rol: string | null = null;
  nombre: string | null = null;
  email: string | null = null;

  // Datos para las gráficas (se cargarán desde el backend)
  chartLabels: string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
  chartData: number[] = [0, 0, 0, 0, 0, 0];
  chartLabel: string = 'Actividad mensual';
  chartColor: string = '#00d4ff';

  // Datos para gráfica de usuarios por rol
  usuariosLabels: string[] = ['Pacientes', 'Profesionales', 'Administradores'];
  usuariosData: number[] = [0, 0, 0];
  usuariosColor: string = '#7ed321';

  constructor(private estadisticasService: EstadisticasService) {}

  ngOnInit() {
    this.rol = localStorage.getItem('usuarioRol');
    this.email = localStorage.getItem('usuarioEmail');

    // Cargar datos reales desde el backend
    this.cargarEstadisticas();
  }

  cargarEstadisticas() {
    // Cargar actividad mensual
    this.estadisticasService.getActividadMensual().subscribe(data => {
      this.chartLabels = data.labels;
      this.chartData = data.data;
    });

    // Cargar usuarios por rol (solo para ADMIN)
    if (this.rol === 'ADMIN') {
      this.estadisticasService.getUsuariosPorRol().subscribe(data => {
        this.usuariosLabels = data.labels;
        this.usuariosData = data.data;
      });
    }
  }
}