import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos implements OnInit {
  posts: Post[] = [];
  loading = true;
  error = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.filter(p => p.categoria === 'Productos');
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}
