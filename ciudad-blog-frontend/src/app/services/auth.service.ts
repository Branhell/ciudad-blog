import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(!!localStorage.getItem('jwtToken'));
  private userEmail = new BehaviorSubject<string | null>(localStorage.getItem('usuarioEmail'));

  isLoggedIn$ = this.loggedIn.asObservable();
  userEmail$ = this.userEmail.asObservable();

  login(email: string, token: string) {
    localStorage.setItem('jwtToken', token);
    localStorage.setItem('usuarioEmail', email);
    this.loggedIn.next(true);
    this.userEmail.next(email);
  }

  logout() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('usuarioEmail');
    this.loggedIn.next(false);
    this.userEmail.next(null);
  }
}