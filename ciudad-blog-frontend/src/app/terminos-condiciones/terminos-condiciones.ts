import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminos-condiciones',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './terminos-condiciones.html',
  styleUrls: ['./terminos-condiciones.css']
})
export class TerminosCondiciones {
  terminos = [
    { id: 1, abierto: false, titulo: 'Aceptación de los Términos', texto: 'Al usar OpenPsy, aceptas estos términos y condiciones. Si no estás de acuerdo, por favor no utilices nuestros servicios.' },
    { id: 2, abierto: false, titulo: 'Uso de la plataforma', texto: 'OpenPsy es un espacio de bienestar y aprendizaje. No está diseñado para emergencias médicas. En caso de crisis, contacta a líneas de ayuda locales.' },
    { id: 3, abierto: false, titulo: 'Responsabilidad del usuario', texto: 'Eres responsable de mantener la confidencialidad de tu cuenta. No compartas tu contraseña ni realices actividades que dañen la plataforma o a otros usuarios.' },
    { id: 4, abierto: false, titulo: 'Propiedad intelectual', texto: 'El contenido de OpenPsy (textos, diseños, código) es propiedad nuestra. Puedes compartirlo citando la fuente, pero no revenderlo ni modificarlo sin permiso.' },
    { id: 5, abierto: false, titulo: 'Planes y pagos', texto: 'Los planes Premium y Empresarial tienen costos asociados. Puedes cancelar en cualquier momento. No hacemos reembolsos parciales por meses no utilizados.' },
    { id: 6, abierto: false, titulo: 'Limitación de responsabilidad', texto: 'OpenPsy no se hace responsable por daños indirectos o pérdidas derivadas del uso de la plataforma. Hacemos nuestro mejor esfuerzo, pero no garantizamos disponibilidad 100% continua.' },
    { id: 7, abierto: false, titulo: 'Modificaciones', texto: 'Podemos actualizar estos términos. Te avisaremos con 15 días de anticipación por correo o notificación en la plataforma.' },
    { id: 8, abierto: false, titulo: 'Ley aplicable', texto: 'Este acuerdo se rige por las leyes de Colombia. Cualquier disputa se resolverá en los tribunales de Bogotá.' }
  ];

  toggleTermino(id: number) {
    this.terminos = this.terminos.map(t => ({
      ...t,
      abierto: t.id === id ? !t.abierto : false
    }));
  }

  irAlInicio() {
    window.location.href = '/';
  }
}