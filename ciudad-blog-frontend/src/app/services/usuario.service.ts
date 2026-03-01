import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Participante } from '../models/participante.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrlUsuarios = 'http://localhost:8080/api/usuarios';
  private apiUrlParticipantes = 'http://localhost:8080/api/participantes';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrlUsuarios);
  }

  getParticipantes(): Observable<Participante[]> {
    return this.http.get<Participante[]>(this.apiUrlParticipantes);
  }

  getParticipanteById(id: number): Observable<Participante> {
    return this.http.get<Participante>(`${this.apiUrlParticipantes}/${id}`);
  }

  deleteParticipante(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrlParticipantes}/${id}`);
  }

  updateParticipante(id: number, participante: Participante): Observable<Participante> {
    return this.http.put<Participante>(`${this.apiUrlParticipantes}/${id}`, participante);
  }

  // 🔹 Nuevo método de login
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };
    return this.http.post(`${this.apiUrlUsuarios}/login`, body, { headers });
  }
}
