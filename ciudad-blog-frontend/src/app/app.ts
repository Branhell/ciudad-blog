import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  isLoggedIn: boolean = false;
  userEmail: string | null = null;
  menuAbierto: boolean = false;

  constructor(private authService: AuthService) {}

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

  ngAfterViewInit() {
    // animaciones GSAP aquí si las necesitas
  }
}