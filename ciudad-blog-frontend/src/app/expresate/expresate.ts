import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-expresate',                // ✅ nombre consistente con la ruta
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expresate.html',          // ✅ apunta al archivo correcto
  styleUrls: ['./expresate.css']            // ✅ apunta al archivo correcto
})
export class ExpresateComponent {           // ✅ nombre consistente con app.routes.ts
  publicacion: Post = {
    id: 0,
    titulo: '',
    contenido: '',
    fecha: new Date().toISOString(),
    autor: { id: 1, nombre: '', email: '' },
    anonimo: false,
    likes: 0,
    comentariosCount: 0
  };

  mensaje: string = '';
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

  publicar(): void {
    this.postService.crearPost({
      titulo: this.publicacion.titulo,
      contenido: this.publicacion.contenido,
      autorId: this.publicacion.autor.id,
      anonimo: this.publicacion.anonimo
    }).subscribe({
      next: data => {
        this.mensaje = data.aprobado
          ? 'Publicación creada correctamente'
          : 'Publicación rechazada por moderación';
        this.cargarPosts();
        this.publicacion = {
          id: 0,
          titulo: '',
          contenido: '',
          fecha: new Date().toISOString(),
          autor: { id: 1, nombre: '', email: '' },
          anonimo: false,
          likes: 0,
          comentariosCount: 0
        };
      },
      error: () => this.mensaje = 'Error al crear publicación'
    });
  }

  darLike(id: number): void {
    this.postService.likePost(id).subscribe(() => this.cargarPosts());
  }

  agregarComentario(id: number): void {
    this.postService.addComment(id).subscribe(() => this.cargarPosts());
  }

  solicitarEliminacion(id: number): void {
    this.postService.solicitarEliminacion(id).subscribe(() => this.cargarPosts());
  }
}
