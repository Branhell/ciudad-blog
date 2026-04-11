import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  loading = true;
  error = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
	console.log('HomeComponent iniciado');
    this.postService.getPosts().subscribe({
      next: (data) => {
		console.log('Posts recibidos:', data);
        this.posts = data.slice(0, 6);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar posts:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}