import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.cargarPosts();
  }

  cargarPosts(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }

  darLike(postId?: number): void {
    if (!postId) return; // evita error si id es undefined
    this.postService.likePost(postId).subscribe(() => {
      console.log('Like agregado');
      this.cargarPosts(); // refresca la lista
    });
  }

  agregarComentario(postId?: number): void {
    if (!postId) return;
    this.postService.addComment(postId).subscribe(() => {
      console.log('Comentario agregado');
      this.cargarPosts(); // refresca la lista
    });
  }

  solicitarEliminacion(postId?: number): void {
    if (!postId) return;
    this.postService.solicitarEliminacion(postId).subscribe(() => {
      console.log('Eliminación solicitada');
      this.cargarPosts(); // refresca la lista
    });
  }
}
