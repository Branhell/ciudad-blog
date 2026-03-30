import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service'; // 🔑 importa AuthService
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class AppComponent implements OnInit, AfterViewInit {

  isLoggedIn: boolean = false;
  userEmail: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // 🔑 Nos suscribimos a los cambios del login
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });

    this.authService.userEmail$.subscribe(email => {
      this.userEmail = email;
    });
  }

  logout() {
    this.authService.logout();
    // 🔑 redirige al login
    window.location.href = '/';
  }

  ngAfterViewInit() {
    // ...todo tu código de canvas y animaciones GSAP aquí
  }
}