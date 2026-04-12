import { Component, ElementRef, AfterViewInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #chartCanvas></canvas>`,
  styles: [`
    canvas {
      max-width: 100%;
      height: auto;
      max-height: 250px;
    }
  `]
})
export class ChartComponent implements AfterViewInit {
  @Input() type: 'line' | 'bar' | 'doughnut' = 'line';
  @Input() labels: string[] = [];
  @Input() data: number[] = [];
  @Input() label: string = 'Evolución';
  @Input() color: string = '#00d4ff';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const canvas = this.el.nativeElement.querySelector('canvas');
    if (canvas) {
      new Chart(canvas, {
        type: this.type,
        data: {
          labels: this.labels,
          datasets: [{
            label: this.label,
            data: this.data,
            borderColor: this.color,
            backgroundColor: this.type === 'doughnut' ? this.color : this.color + '20',
            borderWidth: 2,
            fill: true,
            tension: 0.3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { position: 'bottom' }
          }
        }
      });
    }
  }
}