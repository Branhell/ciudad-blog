import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DashboardComponent } from './dashboard/dashboard';
import { LoginComponent } from './login/login';
import { RegistroComponent } from './registro/registro';
import { authGuard } from './auth.guard'; // 👈 importa el guard

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard] // 👈 protege la ruta con el guard
  },

  // CRUD (solo accesibles desde dashboard)
  { path: 'participantes', loadComponent: () => import('./participantes/participantes').then(m => m.ParticipantesComponent) },
  { path: 'consultar', loadComponent: () => import('./consultar/consultar').then(m => m.ConsultarComponent) },
  { path: 'actualizar', loadComponent: () => import('./actualizar/actualizar').then(m => m.ActualizarComponent) },
  { path: 'eliminar', loadComponent: () => import('./eliminar/eliminar').then(m => m.EliminarComponent) },
  { path: 'expresate', loadComponent: () => import('./expresate/expresate').then(m => m.ExpresateComponent) },

  // Rutas de menú (pantallas vacías por ahora)
  { path: 'servicios', loadComponent: () => import('./servicios/servicios').then(m => m.Servicios) },
  { path: 'productos', loadComponent: () => import('./productos/productos').then(m => m.Productos) },
  { path: 'noticias', loadComponent: () => import('./noticias/noticias').then(m => m.Noticias) },
  { path: 'eventos', loadComponent: () => import('./eventos/eventos').then(m => m.Eventos) },
  { path: 'inspira', loadComponent: () => import('./inspira/inspira').then(m => m.Inspira) },
  { path: 'empresas', loadComponent: () => import('./empresas/empresas').then(m => m.Empresas) },
  { path: 'quantum-magazine', loadComponent: () => import('./quantum-magazine/quantum-magazine').then(m => m.QuantumMagazine) },
  { path: 'contacto', loadComponent: () => import('./contacto/contacto').then(m => m.Contacto) },
  { path: 'quienes-somos', loadComponent: () => import('./quienes-somos/quienes-somos').then(m => m.QuienesSomos) },
  { path: 'trabaja-con-nosotros', loadComponent: () => import('./trabaja-con-nosotros/trabaja-con-nosotros').then(m => m.TrabajaConNosotros) },
  { path: 'preguntas-frecuentes', loadComponent: () => import('./preguntas-frecuentes/preguntas-frecuentes').then(m => m.PreguntasFrecuentes) },
  { path: 'politica-privacidad', loadComponent: () => import('./politica-privacidad/politica-privacidad').then(m => m.PoliticaPrivacidad) },
  { path: 'terminos-condiciones', loadComponent: () => import('./terminos-condiciones/terminos-condiciones').then(m => m.TerminosCondiciones) },
  { path: 'faqs', loadComponent: () => import('./faqs/faqs').then(m => m.Faqs) },
  { path: 'ayuda-urgente', loadComponent: () => import('./ayuda-urgente/ayuda-urgente').then(m => m.AyudaUrgente) },
];
