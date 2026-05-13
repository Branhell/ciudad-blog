import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider, signOut } from 'firebase/auth';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private app = initializeApp(environment.firebaseConfig);
  private auth = getAuth(this.app);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      const token = await result.user.getIdToken();
      this.enviarTokenAlBackend(token, result.user.email, result.user.displayName);
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        console.log('Usuario cerró el popup');
      } else {
        console.error('Error en login con Google', error);
      }
    }
  }

  async loginWithFacebook() {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      const token = await result.user.getIdToken();
      this.enviarTokenAlBackend(token, result.user.email, result.user.displayName);
    } catch (error) {
      console.error('Error en login con Facebook', error);
    }
  }

  async loginWithGithub() {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      const token = await result.user.getIdToken();
      this.enviarTokenAlBackend(token, result.user.email, result.user.displayName);
    } catch (error) {
      console.error('Error en login con Github', error);
    }
  }

  private enviarTokenAlBackend(token: string, email: string | null, nombre: string | null) {
    this.http.post('https://ciudad-blog-production.up.railway.app/api/auth/firebase', { token, email, nombre }).subscribe({
      next: (res: any) => {
        localStorage.setItem('jwtToken', res.token);
        localStorage.setItem('usuarioEmail', email || '');
        localStorage.setItem('usuarioRol', res.rol || 'PACIENTE');
        localStorage.setItem('usuarioNombre', nombre || email?.split('@')[0] || 'Usuario');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => console.error('Error en backend', err)
    });
  }

  logout() {
    signOut(this.auth);
    localStorage.clear();
    this.router.navigate(['/']);
  }
}