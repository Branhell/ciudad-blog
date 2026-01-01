import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';   // 👈 importa RouterOutlet
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterOutlet],   // 👈 agrega RouterOutlet aquí
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit {
  posts: { id: number; titulo: string }[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (err) => {
        console.error('Error cargando posts', err);
      }
    });
  }
}
