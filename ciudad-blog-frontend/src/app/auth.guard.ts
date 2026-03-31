import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('jwtToken');
  const router = inject(Router);

  if (token) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};

export const rolGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('jwtToken');
  const rol = localStorage.getItem('usuarioRol');
  const router = inject(Router);

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const rolesPermitidos = route.data?.['roles'] as string[];
  if (rolesPermitidos && !rolesPermitidos.includes(rol ?? '')) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
