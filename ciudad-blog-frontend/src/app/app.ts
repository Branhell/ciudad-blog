import { Component, AfterViewInit, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements AfterViewInit, OnInit {


  isLoggedIn: boolean = false;
  userEmail: string = '';

  ngOnInit() {
    const user = localStorage.getItem('usuarioEmail');

    if (user) {
      this.isLoggedIn = true;
      this.userEmail = user;
    }
  }

logout() {
  localStorage.removeItem('usuarioEmail');
  this.isLoggedIn = false;

  window.location.href = '/login';
}
  ngAfterViewInit() {
    // 👇 NO TOQUES tu animación (está bien)
    const c = document.getElementById('c') as HTMLCanvasElement;
    if (!c) return;

    const ctx = c.getContext('2d')!;
    let cw = c.width = c.offsetWidth;
    let ch = c.height = c.offsetHeight;
    let tick = 0;

    const CX = cw / 2, CY = ch / 2;

    function smoothstep(t: number) { return t * t * (3 - 2 * t); }

    function drawConvergeAndExpand(originX: number, offset: number, baseAmp: number, expandAmp: number) {
      for (let i = 0; i < 100; i++) {
        const p1 = i / 100, p2 = (i + 1) / 100;
        const x1 = originX + (CX - originX) * p1;
        const y1 = CY + Math.sin((i * 6 + tick) / 50 + offset) * baseAmp * (1 - smoothstep(p1));
        const x2 = originX + (CX - originX) * p2;
        const y2 = CY + Math.sin(((i + 1) * 6 + tick) / 50 + offset) * baseAmp * (1 - smoothstep(p2));

        const fade = Math.pow(p2, 2);
        ctx.strokeStyle = `rgba(135,206,250,${fade})`;
        ctx.lineWidth = 0.5 + fade * 2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      for (let k = 0; k < 60; k++) {
        const e1 = k / 60, e2 = (k + 1) / 60;
        const x1 = CX + Math.sin(e1 * 6 + offset) * 15 * e1;
        const y1 = CY + Math.sin(e1 * 10 + tick / 60 + offset) * expandAmp * e1;
        const x2 = CX + Math.sin(e2 * 6 + offset) * 15 * e2;
        const y2 = CY + Math.sin(e2 * 10 + tick / 60 + offset) * expandAmp * e2;

        const fade = Math.pow(1 - e2, 2);
        ctx.strokeStyle = `rgba(135,206,250,${fade})`;
        ctx.lineWidth = 0.5 + fade * 2;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }

    const ondas: { radio: number }[] = [];

    function loop() {
      ctx.clearRect(0, 0, cw, ch);
      tick++;

      for (let j = 0; j < 12; j++) {
        const baseAmp = 8 + j * 0.5;
        const expandAmp = 60 + j * 3.0;

        drawConvergeAndExpand(0, j * 0.3, baseAmp, expandAmp);
        drawConvergeAndExpand(cw, j * 0.45, baseAmp, expandAmp);
      }

      if (tick % 20 === 0) {
        ondas.push({ radio: 0 });
      }

      ondas.forEach((onda, index) => {
        onda.radio += 2;
        const alpha = Math.max(0, 1 - onda.radio / 400);

        ctx.beginPath();
        ctx.arc(CX, CY, onda.radio, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(135,206,250,${alpha})`;
        ctx.lineWidth = 2 * alpha;
        ctx.stroke();

        if (alpha <= 0) ondas.splice(index, 1);
      });

      const pulseAlpha = Math.sin(tick / 20) * 0.5 + 0.5;
      ctx.beginPath();
      ctx.arc(CX, CY, 10 + Math.sin(tick / 10) * 5, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${pulseAlpha})`;
      ctx.lineWidth = 3;
      ctx.shadowBlur = 40;
      ctx.shadowColor = `rgba(255,255,255,${pulseAlpha})`;
      ctx.stroke();

      requestAnimationFrame(loop);
    }

    loop();
  }
}