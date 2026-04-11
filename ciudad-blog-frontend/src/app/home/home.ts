import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import gsap from 'gsap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  posts: Post[] = [];
  loading = true;
  error = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 6);
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  ngAfterViewInit() {
    // Animaciones GSAP
    gsap.from('.hero-badge', {
      duration: 0.8,
      y: -30,
      opacity: 0,
      ease: 'back.out(1)'
    });
    
    gsap.from('.hero-titulo', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      delay: 0.2,
      ease: 'power3.out'
    });
    
    gsap.from('.hero-subtitulo', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.4,
      ease: 'power3.out'
    });
    
    gsap.from('.hero-acciones', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.6,
      ease: 'power3.out'
    });
    
    gsap.from('.hero-stats', {
      duration: 0.8,
      y: 20,
      opacity: 0,
      delay: 0.8,
      ease: 'power3.out'
    });
  }
}