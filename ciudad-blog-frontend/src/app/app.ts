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

  // 🔥 NUEVO: controla si se muestra navbar/footer
  mostrarLayout: boolean = true;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router // 🔥 NUEVO
  ) {
    // 🔥 NUEVO: detectar la ruta actual
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.mostrarLayout = !event.url.includes('acceder');
      });
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
    this.authService.userEmail$.subscribe(email => {
      this.userEmail = email;
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

  // Método para probar notificaciones
  testNotification() {
    this.notificationService.testNotification();
  }

  ngAfterViewInit() {
    // Inicializar AOS para animaciones al scroll
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

    // Inicializar notificaciones (solo permiso)
    this.notificationService.requestPermission();
  }
}