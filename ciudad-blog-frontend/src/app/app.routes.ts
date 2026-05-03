import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DashboardComponent } from './dashboard/dashboard';
import { authGuard, rolGuard } from './auth.guard';
import { PacientesComponent } from './pacientes/pacientes';
import { AdminUsuariosComponent } from './admin-usuarios/admin-usuarios';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'acceder', loadComponent: () => import('./acceder/acceder').then(m => m.AccederComponent) },
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

  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'paciente', component: DashboardComponent, canActivate: [rolGuard], data: { roles: ['PACIENTE'] } },
      { path: 'profesional', component: DashboardComponent, canActivate: [rolGuard], data: { roles: ['PROFESIONAL'] } },
      { path: 'admin', component: DashboardComponent, canActivate: [rolGuard], data: { roles: ['ADMIN'] } },
      { path: 'pacientes', component: PacientesComponent },
      { path: 'admin/usuarios', component: AdminUsuariosComponent }
    ]
  }
];