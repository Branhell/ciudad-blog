import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:8080/posts'; // 👈 asegúrate que coincida con tu backend

  constructor(private http: HttpClient) {}

  // Obtener todos los posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  // Crear un nuevo post
  crearPost(payload: { titulo: string; contenido: string; autorId: number; anonimo?: boolean }): Observable<Post> {
    const body = {
      titulo: payload.titulo,
      contenido: payload.contenido,
      autor: { id: payload.autorId }, // 👈 importante: objeto con id
      anonimo: payload.anonimo ?? false
    };
    return this.http.post<Post>(this.apiUrl, body);
  }

  // Dar like a un post
  likePost(id: number): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}/like`, {});
  }

  // Agregar comentario a un post
  addComment(id: number): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}/comentario`, {});
  }

  // Solicitar eliminación de un post
  solicitarEliminacion(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}/solicitar-eliminacion`, {});
  }
}
