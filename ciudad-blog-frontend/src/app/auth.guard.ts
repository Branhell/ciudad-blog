import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const usuarioEmail = localStorage.getItem('usuarioEmail');
  const router = inject(Router); // 👈 inyecta el Router correctamente

  if (usuarioEmail) {
    // ✅ Usuario logueado, puede entrar
    return true;
  } else {
    // ❌ No logueado, redirige al login
    router.navigate(['/login']);
    return false;
  }
};
