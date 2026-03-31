import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('jwtToken'));
  private userEmail = new BehaviorSubject<string | null>(localStorage.getItem('usuarioEmail'));
  private userRol = new BehaviorSubject<string | null>(localStorage.getItem('usuarioRol'));

  isLoggedIn$ = this.loggedIn.asObservable();
  userEmail$ = this.userEmail.asObservable();
  userRol$ = this.userRol.asObservable();

  login(email: string, token: string, rol: string) {
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('usuarioEmail', email);
    localStorage.setItem('usuarioRol', rol);
    this.loggedIn.next(true);
    this.userEmail.next(email);
    this.userRol.next(rol);
  }

  logout() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('usuarioEmail');
    localStorage.removeItem('usuarioRol');
    this.loggedIn.next(false);
    this.userEmail.next(null);
    this.userRol.next(null);
  }

  getRol(): string | null {
    return localStorage.getItem('usuarioRol');
  }
}