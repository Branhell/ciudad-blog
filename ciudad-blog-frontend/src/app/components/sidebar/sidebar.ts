import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})

export class SidebarComponent implements OnInit {
  rol: string | null = null;
  nombre: string | null = null;
  email: string | null = null;
  isCollapsed: boolean = true;
  avatarUrl: string | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.rol = localStorage.getItem('usuarioRol');
    this.nombre = localStorage.getItem('usuarioNombre');
    this.email = localStorage.getItem('usuarioEmail');
    this.avatarUrl = localStorage.getItem('usuarioAvatar');
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/']);
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