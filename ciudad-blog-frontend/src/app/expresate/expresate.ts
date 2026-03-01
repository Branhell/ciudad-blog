import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expresate',
  standalone: true,
  template: '', // no necesitas HTML aquí
})
export class ExpresateComponent implements OnInit {
  ngOnInit(): void {
    // Redirige al foro Discourse
    window.location.href = 'http://localhost';
  }
}
