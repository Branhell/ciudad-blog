import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DashboardComponent } from './dashboard/dashboard';
import { LoginComponent } from './login/login';
import { RegistroComponent } from './registro/registro';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent },

  // CRUD (solo accesibles desde dashboard)
  { path: 'participantes', loadComponent: () => import('./participantes/participantes').then(m => m.ParticipantesComponent) },
  { path: 'consultar', loadComponent: () => import('./consultar/consultar').then(m => m.ConsultarComponent) },
  { path: 'actualizar', loadComponent: () => import('./actualizar/actualizar').then(m => m.ActualizarComponent) },
  { path: 'eliminar', loadComponent: () => import('./eliminar/eliminar').then(m => m.EliminarComponent) },

  // Blog / Posts
  // Rutas de menú (pantallas vacías por ahora)
  { path: 'expresate', loadComponent: () => import('./expresate/expresate').then(m => m.ExpresateComponent) },
  // { path: 'servicios', loadComponent: () => import('./servicios/servicios').then(m => m.ServiciosComponent) },
  // { path: 'productos', loadComponent: () => import('./productos/productos').then(m => m.ProductosComponent) },
  // { path: 'noticias', loadComponent: () => import('./noticias/noticias').then(m => m.NoticiasComponent) },
  // { path: 'eventos', loadComponent: () => import('./eventos/eventos').then(m => m.EventosComponent) },
  // { path: 'blog', loadComponent: () => import('./blog/blog').then(m => m.BlogComponent) },
  // { path: 'inspira', loadComponent: () => import('./inspira/inspira').then(m => m.InspiraComponent) },
  // { path: 'empresas', loadComponent: () => import('./empresas/empresas').then(m => m.EmpresasComponent) },
  // { path: 'magazine', loadComponent: () => import('./magazine/magazine').then(m => m.MagazineComponent) },
  // { path: 'contacto', loadComponent: () => import('./contacto/contacto').then(m => m.ContactoComponent) },
];
