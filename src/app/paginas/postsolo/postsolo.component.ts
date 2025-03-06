import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ListacomentarioComponent } from '../../comentarios/listacomentario/listacomentario.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-postsolo',
  standalone: true,
  imports: [CommonModule, ListacomentarioComponent, RouterModule],
  templateUrl: './postsolo.component.html',
  styleUrl: './postsolo.component.css',
})
export class PostsoloComponent implements OnInit {

  post: any = null;
  isLoading = true;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
      
    if (!postId) {
      this.errorMessage = 'No se proporcionó un ID de post.';
      this.isLoading = false;
      return;
    }

    this.loadPost(postId);
  }

  loadPost(postId: string): void {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .subscribe({
            next: (post) => {
                this.post = post;
                this.isLoading = false;
            },
            error: () => {
                this.errorMessage = 'No se pudo cargar el post.';
                this.isLoading = false;
            }
        });
  }
}
