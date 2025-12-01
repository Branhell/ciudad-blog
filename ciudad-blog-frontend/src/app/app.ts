import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],   // 👈 agrega RouterLink aquí
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
