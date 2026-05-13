import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrlUsuarios = 'https://ciudad-blog-production.up.railway.app/api/usuarios';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrlUsuarios);
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };
    return this.http.post(`${this.apiUrlUsuarios}/login`, body, { headers }).pipe(
      tap((res: any) => {
        if (res.token) {
          this.authService.login(res.email, res.token, res.rol);
        }
      })
    );
  }
}