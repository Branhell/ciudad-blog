import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrlUsuarios = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  // Obtener todos los usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrlUsuarios);
  }

  // Login real con JWT
  login(email: string, password: string): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const body = { email, password };
  
  return this.http.post(`${this.apiUrlUsuarios}/login`, body, { headers }).pipe(
    tap((res: any) => {
      if (res.token) {
        localStorage.setItem('jwtToken', res.token);  // ✅ Guardar token
        localStorage.setItem('usuarioEmail', res.email); // opcional, para navbar
      }
    })
  );
}

}