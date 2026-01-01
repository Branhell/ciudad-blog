import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],   // 👈 standalone con router
  templateUrl: './app.html',             // 👈 apunta a tu plantilla
  styleUrls: ['./app.css']               // 👈 estilos opcionales
})
export class AppComponent {}
