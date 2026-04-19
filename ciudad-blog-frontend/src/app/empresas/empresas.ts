import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './empresas.html',
  styles: [`
    /* Hero Cinemático */
    .hero-cinematic {
      position: relative;
      height: 80vh;
      min-height: 600px;
      background: linear-gradient(135deg, #0a0a0a, #1a1a2e);
      overflow: hidden;
      margin-top: 70px;
    }
    .hero-bg-animation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3), transparent 50%),
                  radial-gradient(circle at 80% 80%, rgba(139,92,246,0.3), transparent 50%);
      animation: pulse 4s ease-in-out infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
    .hero-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      text-align: center;
      color: white;
      padding: 20px;
    }
    .hero-badge {
      background: rgba(59,130,246,0.3);
      backdrop-filter: blur(10px);
      padding: 8px 20px;
      border-radius: 50px;
      font-size: 0.85rem;
      margin-bottom: 30px;
      display: inline-block;
      border: 1px solid rgba(59,130,246,0.5);
    }
    .hero-content h1 {
      font-size: 4rem;
      margin-bottom: 20px;
      background: linear-gradient(135deg, #fff, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 200%;
      animation: gradientShift 3s ease infinite;
    }
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .hero-content p {
      font-size: 1.3rem;
      max-width: 700px;
      margin-bottom: 40px;
      color: rgba(255,255,255,0.9);
    }
    .hero-stats {
      display: flex;
      gap: 40px;
      flex-wrap: wrap;
      justify-content: center;
    }
    .stat {
      text-align: center;
    }
    .stat-number {
      font-size: 2.5rem;
      font-weight: bold;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .stat-label {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.7);
      margin-top: 5px;
    }
    .vision-section {
      padding: 100px 20px;
      background: linear-gradient(135deg, #0f172a, #1e293b);
    }
    .vision-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .vision-card {
      text-align: center;
      padding: 40px 30px;
      background: rgba(255,255,255,0.05);
      border-radius: 30px;
      border: 1px solid rgba(255,255,255,0.1);
      transition: all 0.4s ease;
    }
    .vision-card:hover {
      transform: translateY(-10px);
      background: rgba(255,255,255,0.1);
      border-color: rgba(59,130,246,0.5);
    }
    .vision-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    .vision-card h3 {
      font-size: 1.5rem;
      color: white;
      margin-bottom: 15px;
    }
    .vision-card p {
      color: #94a3b8;
      line-height: 1.6;
    }
    .pilares-section {
      padding: 100px 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
    }
    .pilares-header {
      text-align: center;
      margin-bottom: 60px;
    }
    .pilares-header h2 {
      font-size: 2.5rem;
      color: white;
      margin-bottom: 15px;
    }
    .pilares-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .pilar {
      text-align: center;
      padding: 30px;
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      transition: transform 0.3s ease;
    }
    .pilar:hover {
      transform: scale(1.05);
    }
    .pilar-icon {
      font-size: 2.5rem;
      margin-bottom: 15px;
    }
    .pilar h4 {
      font-size: 1.2rem;
      color: white;
      margin-bottom: 10px;
    }
    .pilar p {
      color: rgba(255,255,255,0.9);
      font-size: 0.9rem;
    }
    .oportunidades-section {
      padding: 100px 20px;
      background: #0f172a;
    }
    .oportunidades-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
    }
    .oportunidad-card {
      background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1));
      border-radius: 30px;
      padding: 40px;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .oportunidad-card h3 {
      font-size: 1.8rem;
      color: white;
      margin-bottom: 20px;
    }
    .oportunidad-card p {
      color: #94a3b8;
      margin-bottom: 25px;
      line-height: 1.6;
    }
    .btn-oportunidad {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
      padding: 12px 30px;
      border-radius: 50px;
      text-decoration: none;
      display: inline-block;
      transition: transform 0.3s ease;
    }
    .btn-oportunidad:hover {
      transform: translateX(10px);
    }
    .lista-beneficios {
      list-style: none;
      margin-top: 20px;
    }
    .lista-beneficios li {
      color: #cbd5e1;
      padding: 8px 0;
      padding-left: 25px;
      position: relative;
    }
    .lista-beneficios li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #10b981;
    }
    .cta-final {
      padding: 80px 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      text-align: center;
    }
    .cta-final h2 {
      font-size: 2.5rem;
      color: white;
      margin-bottom: 20px;
    }
    .cta-final p {
      color: rgba(255,255,255,0.9);
      margin-bottom: 30px;
    }
    .btn-cta-glow {
      background: white;
      color: #667eea;
      padding: 15px 40px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      display: inline-block;
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(255,255,255,0.3);
    }
    .btn-cta-glow:hover {
      transform: scale(1.05);
      box-shadow: 0 0 30px rgba(255,255,255,0.5);
    }
    @media (max-width: 768px) {
      .hero-content h1 { font-size: 2rem; }
      .oportunidades-container { grid-template-columns: 1fr; }
      .hero-stats { gap: 20px; }
    }
  `]
})
export class EmpresasComponent {
  emailContacto = '';

  enviarContacto() {
    if (this.emailContacto && this.emailContacto.includes('@')) {
      alert('✨ ¡Gracias! Un asesor se pondrá en contacto contigo pronto.');
      this.emailContacto = '';
    } else {
      alert('❌ Por favor, ingresa un email válido');
    }
  }
}
