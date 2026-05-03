import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  isLoggedIn: boolean = false;
  userEmail: string | null = null;
  menuAbierto: boolean = false;
  mostrarLayout: boolean = true;
  mostrarOpcionesPrivadas: boolean = false;
  avatarUrl: string | null = null;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {
    // Detectar la ruta actual para ocultar navbar/footer y mostrar opciones privadas
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.url;
        const rutasDashboard = ['/dashboard', '/pacientes', '/admin/usuarios'];
        const esDashboard = rutasDashboard.some(ruta => url.includes(ruta));
        
        // Ocultar navbar/footer en dashboard
        this.mostrarLayout = !esDashboard;
        
        // Mostrar correo y cerrar sesión SOLO en rutas del dashboard
        this.mostrarOpcionesPrivadas = url.includes('/dashboard') ||
                                       url.includes('/pacientes') ||
                                       url.includes('/admin/usuarios');
      });
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
    this.authService.userEmail$.subscribe(email => {
      this.userEmail = email;
    });
    this.authService.userAvatar$.subscribe(avatar => {
      this.avatarUrl = avatar;
    });
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu() {
    this.menuAbierto = false;
  }

  logout() {
    this.authService.logout();
    this.cerrarMenu();
    window.location.href = '/';
  }

  testNotification() {
    this.notificationService.testNotification();
  }

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      import('aos').then(AOS => {
        AOS.default.init({
          duration: 800,
          once: true,
          offset: 100,
          easing: 'ease-out'
        });
      });
    }
    this.notificationService.requestPermission();
  }
}