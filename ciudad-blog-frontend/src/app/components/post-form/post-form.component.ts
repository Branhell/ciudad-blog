import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  exito = false;

  post = {
    titulo: '',
    contenido: '',
    autorId: null
  };

  autores: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data: Usuario[]) => {
      this.autores = data;
    });
  }
  crearPost(): void {
    if (this.post.autorId === null) {
      alert('⚠️ Por favor seleccioná un autor antes de publicar.');
      return;
    }

    const body = {
      titulo: this.post.titulo,
      contenido: this.post.contenido,
      autor: { id: this.post.autorId }
    };

    console.log('📦 Enviando post:', body);

    this.http.post('http://localhost:8080/posts', body).subscribe({
      next: () => {
        this.exito = true;
        this.post = { titulo: '', contenido: '', autorId: null };

        setTimeout(() => {
          this.exito = false;
        }, 3000);
      },
      error: (err) => {
        console.error('❌ Error al crear el post:', err);
      }
    });
  }
}
