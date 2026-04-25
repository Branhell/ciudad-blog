import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-politica-privacidad',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './politica-privacidad.html',
  styleUrls: ['./politica-privacidad.css']
})
export class PoliticaPrivacidad {
	secciones = [
	  { titulo: 'Informaci¨®n que recopilamos', texto: 'Recopilamos datos b¨¢sicos como nombre, correo electr¨®nico, rol (paciente, profesional, empresa) y preferencias de uso para mejorar tu experiencia.' },
	  { titulo: 'C¨®mo protegemos tus datos', texto: 'Usamos cifrado SSL, autenticaci¨®n JWT y servidores en la nube con est¨¢ndares internacionales. Tus datos est¨¢n seguros.' },
	  { titulo: 'Compartici¨®n de datos', texto: 'No vendemos ni alquilamos tu informaci¨®n. Solo compartimos datos con profesionales si t¨² lo autorizas o por obligaci¨®n legal.' },
	  { titulo: 'Uso de cookies', texto: 'Usamos cookies para recordar tu sesi¨®n, preferencias y mejorar el rendimiento. Puedes gestionarlas desde tu navegador.' },
	  { titulo: 'Tus derechos', texto: 'Puedes acceder, rectificar, eliminar tus datos o solicitar portabilidad. Escr¨ªbenos a privacidad@openpsy.com' },
	  { titulo: 'Cambios a esta pol¨ªtica', texto: 'Actualizaremos esta p¨¢gina cuando sea necesario. Te avisaremos por correo si hay cambios importantes.' }
	];

  getIcono(index: number): string {
    const iconos = [
      'fas fa-database',
      'fas fa-shield-alt',
      'fas fa-handshake',
      'fas fa-cookie-bite',
      'fas fa-user-shield',
      'fas fa-sync-alt'
    ];
    return iconos[index] || 'fas fa-shield-alt';
  }

  irAlInicio() {
    window.location.href = '/';
  }
}