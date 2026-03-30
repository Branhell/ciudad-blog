import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  getPostsByCategoria(categoria: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/categoria/${categoria}`);
  }

  crearPost(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
}
