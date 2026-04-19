import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inspira',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inspira.component.html',
  styles: [`
    .inspira-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #f5f0ff 0%, #e8e0ff 100%);
      margin-top: 70px;
      padding: 60px 20px;
    }
    .inspira-header {
      text-align: center;
      margin-bottom: 60px;
    }
    .inspira-header h1 {
      font-size: 3.5rem;
      color: #4a2b7a;
      margin-bottom: 15px;
      font-family: 'Georgia', serif;
    }
    .inspira-header p {
      font-size: 1.2rem;
      color: #7a5fa3;
      font-style: italic;
    }
    .frase-dia {
      background: white;
      max-width: 800px;
      margin: 0 auto 60px;
      padding: 50px;
      border-radius: 30px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      text-align: center;
      border: 1px solid rgba(74,43,122,0.2);
    }
    .frase-texto {
      font-size: 1.8rem;
      line-height: 1.5;
      color: #2d1b4e;
      font-family: 'Georgia', serif;
      margin-bottom: 20px;
    }
    .frase-autor {
      font-size: 1rem;
      color: #9b7bc5;
      letter-spacing: 2px;
    }
    .frase-icono {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    .grid-inspira {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .card-inspira {
      background: white;
      border-radius: 24px;
      padding: 30px;
      transition: all 0.3s ease;
      border: 1px solid rgba(74,43,122,0.1);
    }
    .card-inspira:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(74,43,122,0.15);
    }
    .card-icono {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }
    .card-titulo {
      font-size: 1.3rem;
      font-weight: bold;
      color: #4a2b7a;
      margin-bottom: 15px;
    }
    .card-texto {
      color: #6b5b8c;
      line-height: 1.6;
      margin-bottom: 20px;
    }
    .card-tag {
      display: inline-block;
      background: #f0ebff;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.75rem;
      color: #4a2b7a;
    }
    @media (max-width: 768px) {
      .inspira-header h1 { font-size: 2rem; }
      .frase-texto { font-size: 1.3rem; }
      .frase-dia { padding: 30px; }
    }
  `]
})
export class InspiraComponent {
  fraseDelDia = {
    texto: "La mente es como un jardín. Si la cultivas bien, florece. Si la descuidas, se llena de maleza.",
    autor: "Proverbio Zen",
    icono: "🌱"
  };

  cards = [
    { icono: "🧠", titulo: "Fortalece tu mente", texto: "Cada pensamiento es una semilla. Elige cultivar los que te hacen bien.", tag: "Mindfulness" },
    { icono: "💪", titulo: "Resiliencia", texto: "No es la carga lo que te rompe, sino cómo la llevas.", tag: "Motivación" },
    { icono: "✨", titulo: "Propósito", texto: "No busques fuera lo que ya vive dentro de ti.", tag: "Reflexión" },
    { icono: "🎯", titulo: "Metas", texto: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", tag: "Éxito" },
    { icono: "💖", titulo: "Autocompasión", texto: "Sé tan amable contigo mismo como lo eres con los demás.", tag: "Bienestar" },
    { icono: "🌟", titulo: "Gratitud", texto: "La gratitud convierte lo que tenemos en suficiente.", tag: "Agradecimiento" }
  ];
}
