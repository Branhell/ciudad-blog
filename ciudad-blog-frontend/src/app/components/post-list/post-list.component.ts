import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts: any[] = [];

  constructor(private http: HttpClient) {}

  solicitarEliminacion(postId: number | undefined) {
    if (postId !== undefined) {
      this.http.put(`http://localhost:8080/posts/${postId}/solicitar-eliminacion`, {})
        .subscribe(() => console.log('Eliminación solicitada'));
    }
  }
}
