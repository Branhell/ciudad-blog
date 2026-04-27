import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DashboardComponent } from './dashboard/dashboard';
import { authGuard, rolGuard } from './auth.guard';
// import { LoginComponent } from './login/login';
// import { RegistroComponent } from './registro/registro';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  
// { path: 'login', component: LoginComponent },
// { path: 'registro', component: RegistroComponent },
  { path: 'acceder', loadComponent: () => import('./acceder/acceder').then(m => m.AccederComponent) },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'dashboard/paciente', component: DashboardComponent, canActivate: [rolGuard], data: { roles: ['PACIENTE'] } },
  { path: 'dashboard/profesional', component: DashboardComponent, canActivate: [rolGuard], data: { roles: ['PROFESIONAL'] } },
  { path: 'dashboard/admin', component: DashboardComponent, canActivate: [rolGuard], data: { roles: ['ADMIN'] } },

  { path: 'foro', loadComponent: () => import('./expresate/expresate').then(m => m.ExpresateComponent) },
  { path: 'servicios', loadComponent: () => import('./servicios/servicios').then(m => m.Servicios) },
  { path: 'eventos', loadComponent: () => import('./eventos/eventos').then(m => m.EventosComponent) },
  { path: 'empresas', loadComponent: () => import('./empresas/empresas').then(m => m.EmpresasComponent) },
  { path: 'contacto', loadComponent: () => import('./contacto/contacto').then(m => m.Contacto) },
  { path: 'quienes-somos', loadComponent: () => import('./quienes-somos/quienes-somos').then(m => m.QuienesSomos) },
  { path: 'preguntas-frecuentes', loadComponent: () => import('./preguntas-frecuentes/preguntas-frecuentes').then(m => m.PreguntasFrecuentes) },
  { path: 'politica-privacidad', loadComponent: () => import('./politica-privacidad/politica-privacidad').then(m => m.PoliticaPrivacidad) },
  { path: 'terminos-condiciones', loadComponent: () => import('./terminos-condiciones/terminos-condiciones').then(m => m.TerminosCondiciones) },
  { path: 'ayuda-urgente', loadComponent: () => import('./ayuda-urgente/ayuda-urgente').then(m => m.AyudaUrgente) },
];