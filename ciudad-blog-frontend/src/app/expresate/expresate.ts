import { Component } from '@angular/core';

@Component({
  selector: 'app-expresate',
  standalone: true,
  templateUrl: './expresate.html',
  styleUrl: './expresate.css'
})
export class ExpresateComponent {

  irAlForo() {
    window.location.href = 'http://localhost';
  }

}