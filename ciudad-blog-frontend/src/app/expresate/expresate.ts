import { Component, OnInit, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoService } from '../services/foro.service';

// Registrar Swiper
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-expresate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expresate.html',
  styleUrls: ['./expresate.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpresateComponent implements OnInit, AfterViewInit {
  ultimosTemas: any[] = [];
  loading = true;
  activeTab: string = 'tab1';

  constructor(private foroService: ForoService) {}

  ngOnInit() {
    this.cargarTemas();
  }

  cargarTemas() {
    this.foroService.getUltimosTemas().subscribe({
      next: (data: any) => {
        console.log('Datos del foro:', data);
        this.ultimosTemas = data.topic_list?.topics?.slice(0, 5) || [];
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error al cargar temas:', err);
        this.loading = false;
      }
    });
  }

  ngAfterViewInit() {
    this.initTabs();
  }

  initTabs() {
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        if (tabId) {
          this.activeTab = tabId;
          
          buttons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
          });
          const activeContent = document.getElementById(tabId);
          if (activeContent) {
            activeContent.classList.add('active');
          }
        }
      });
    });
  }

  irAlForo() {
    window.location.href = 'http://localhost';
  }

  irAlTema(temaId: number) {
    window.location.href = `http://localhost/t/${temaId}`;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}