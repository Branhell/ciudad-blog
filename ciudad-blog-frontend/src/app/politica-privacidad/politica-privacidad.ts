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
    { titulo: '📋 Información que recopilamos', texto: 'Recopilamos datos básicos como nombre, correo electrónico, rol (paciente, profesional, empresa) y preferencias de uso para mejorar tu experiencia.' },
    { titulo: '🔐 Cómo protegemos tus datos', texto: 'Usamos cifrado SSL, autenticación JWT y servidores en la nube con estándares internacionales. Tus datos están seguros.' },
    { titulo: '🔄 Compartición de datos', texto: 'No vendemos ni alquilamos tu información. Solo compartimos datos con profesionales si tú lo autorizas o por obligación legal.' },
    { titulo: '🍪 Uso de cookies', texto: 'Usamos cookies para recordar tu sesión, preferencias y mejorar el rendimiento. Puedes gestionarlas desde tu navegador.' },
    { titulo: '👤 Tus derechos', texto: 'Puedes acceder, rectificar, eliminar tus datos o solicitar portabilidad. Escríbenos a privacidad@ecobits.com' },
    { titulo: '📅 Cambios a esta política', texto: 'Actualizaremos esta página cuando sea necesario. Te avisaremos por correo si hay cambios importantes.' }
  ];
}
