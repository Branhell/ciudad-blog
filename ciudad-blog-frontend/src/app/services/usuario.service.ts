import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Participante } from '../models/participante.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrlUsuarios = 'http://localhost:8081/api/usuarios';
  private apiUrlParticipantes = 'http://localhost:8081/api/participantes';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrlUsuarios);
  }

  getParticipantes(): Observable<Participante[]> {
    return this.http.get<Participante[]>(this.apiUrlParticipantes);
  }

  getParticipanteById(id: number): Observable<Participante> {
     return this.http.get<Participante>(`http://localhost:8081/api/participantes/${id}`);
  }

  deleteParticipante(id: number): Observable<void> {
     return this.http.delete<void>(`http://localhost:8081/api/participantes/${id}`);
}

  updateParticipante(id: number, participante: Participante): Observable<Participante> {
     return this.http.put<Participante>(`http://localhost:8081/api/participantes/${id}`, participante);
  }
}
