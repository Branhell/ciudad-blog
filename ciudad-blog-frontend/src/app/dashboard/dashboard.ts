import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChartComponent } from '../components/chart/chart';
import { EstadisticasService } from '../services/estadisticas.service';
import { SidebarComponent } from '../components/sidebar/sidebar';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, ChartComponent, SidebarComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})

export class DashboardComponent implements OnInit {
  avatarUrl: string | null = null;
  rol: string | null = null;
  email: string | null = null;
  nombre: string | null = null;
  
  mostrarPanelEdicion: boolean = false;
  posicionX: number = 50;
  posicionY: number = 50;
  modoArrastreActivo: boolean = false;
  arrastrando: boolean = false;
  inicioX: number = 0;
  inicioY: number = 0;
  posicionInicialX: number = 0;
  posicionInicialY: number = 0;

  chartLabels: string[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
  chartData: number[] = [0, 0, 0, 0, 0, 0];
  chartLabel: string = 'Actividad mensual';
  chartColor: string = '#00d4ff';
  usuariosLabels: string[] = ['Pacientes', 'Profesionales', 'Administradores'];
  usuariosData: number[] = [0, 0, 0];
  usuariosColor: string = '#7ed321';

  constructor(
    private estadisticasService: EstadisticasService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.avatarUrl = localStorage.getItem('usuarioAvatar');
    this.rol = localStorage.getItem('usuarioRol');
    this.email = localStorage.getItem('usuarioEmail');
    this.nombre = localStorage.getItem('usuarioNombre');
    
    // Pequeño retraso para asegurar que el DOM esté listo
    setTimeout(() => {
      this.cargarFondoGuardado();
    }, 100);
    
    this.cargarEstadisticas();
  }

  cargarFondoGuardado() {
    const fondoGuardado = localStorage.getItem(`fondo_${this.rol}`);
    const posGuardada = localStorage.getItem(`fondo_pos_${this.rol}`);
    
    if (posGuardada) {
      const [x, y] = posGuardada.split(',');
      this.posicionX = parseInt(x);
      this.posicionY = parseInt(y);
    }
    
    if (fondoGuardado) {
      const selector = this.getSelectorPorRol();
      const header = document.querySelector(selector) as HTMLElement;
      if (header) {
        header.style.backgroundImage = `url('${fondoGuardado}')`;
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = `${this.posicionX}% ${this.posicionY}%`;
        header.style.backgroundBlendMode = 'overlay';
      }
    }
  }

  noHayDatos(): boolean {
    return !this.chartData || this.chartData.length === 0 || this.chartData.every(v => v === 0);
  }

  hayDatos(): boolean {
    return this.chartData && this.chartData.length > 0 && this.chartData.some(v => v > 0);
  }

  cargarEstadisticas() {
    this.estadisticasService.getActividadMensual().subscribe(data => {
      this.chartLabels = data.labels;
      this.chartData = data.data;
    });
    if (this.rol === 'ADMIN') {
      this.estadisticasService.getUsuariosPorRol().subscribe(data => {
        this.usuariosLabels = data.labels;
        this.usuariosData = data.data;
      });
    }
  }

  getSelectorPorRol(): string {
    if (this.rol === 'PACIENTE') return '.dashboard-header.paciente';
    if (this.rol === 'PROFESIONAL') return '.dashboard-header.profesional';
    if (this.rol === 'ADMIN') return '.dashboard-header.admin';
    return '';
  }

  abrirSelectorImagen() {
    const input = document.getElementById('uploadFondo') as HTMLInputElement;
    if (input) input.click();
  }

  onImagenSeleccionada(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imagenUrl = e.target.result;
        const selector = this.getSelectorPorRol();
        const header = document.querySelector(selector) as HTMLElement;
        if (header) {
          header.style.backgroundImage = `url('${imagenUrl}')`;
          header.style.backgroundSize = 'cover';
          header.style.backgroundPosition = `${this.posicionX}% ${this.posicionY}%`;
          header.style.backgroundBlendMode = 'overlay';
          localStorage.setItem(`fondo_${this.rol}`, imagenUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  toggleModoArrastre() {
    this.modoArrastreActivo = !this.modoArrastreActivo;
    if (!this.modoArrastreActivo) this.finalizarArrastre();
  }

  iniciarArrastre(event: MouseEvent) {
    if (!this.modoArrastreActivo) return;
    this.arrastrando = true;
    this.inicioX = event.clientX;
    this.inicioY = event.clientY;
    this.posicionInicialX = this.posicionX;
    this.posicionInicialY = this.posicionY;
    event.preventDefault();
  }

  duranteArrastre(event: MouseEvent) {
    if (!this.arrastrando || !this.modoArrastreActivo) return;
    const deltaX = event.clientX - this.inicioX;
    const deltaY = event.clientY - this.inicioY;
    let nuevaX = this.posicionInicialX + (deltaX / 1.5);
    let nuevaY = this.posicionInicialY + (deltaY / 1.5);
    nuevaX = Math.min(100, Math.max(0, nuevaX));
    nuevaY = Math.min(100, Math.max(0, nuevaY));
    this.posicionX = nuevaX;
    this.posicionY = nuevaY;
    const selector = this.getSelectorPorRol();
    const header = document.querySelector(selector) as HTMLElement;
    if (header) {
      header.style.backgroundPosition = `${this.posicionX}% ${this.posicionY}%`;
      localStorage.setItem(`fondo_pos_${this.rol}`, `${this.posicionX},${this.posicionY}`);
    }
  }

  finalizarArrastre() {
    this.arrastrando = false;
  }

  abrirPanelEdicion() {
    this.mostrarPanelEdicion = true;
  }

  cerrarPanelEdicion() {
    this.mostrarPanelEdicion = false;
    this.arrastrando = false;
  }

  moverImagen(direccion: string) {
    const paso = 5;
    switch(direccion) {
      case 'left': this.posicionX = Math.max(0, this.posicionX - paso); break;
      case 'right': this.posicionX = Math.min(100, this.posicionX + paso); break;
      case 'up': this.posicionY = Math.max(0, this.posicionY - paso); break;
      case 'down': this.posicionY = Math.min(100, this.posicionY + paso); break;
    }
    const selector = this.getSelectorPorRol();
    const header = document.querySelector(selector) as HTMLElement;
    if (header) {
      header.style.backgroundPosition = `${this.posicionX}% ${this.posicionY}%`;
      localStorage.setItem(`fondo_pos_${this.rol}`, `${this.posicionX},${this.posicionY}`);
    }
  }

  abrirSelectorAvatar() {
    const input = document.getElementById('uploadAvatar') as HTMLInputElement;
    if (input) input.click();
  }

  onAvatarSeleccionado(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imagenUrl = e.target.result;
        localStorage.setItem('usuarioAvatar', imagenUrl);
        this.avatarUrl = imagenUrl;
        this.authService.actualizarAvatar(imagenUrl);
        window.location.reload();
      };
      reader.readAsDataURL(file);
    }
  }
}