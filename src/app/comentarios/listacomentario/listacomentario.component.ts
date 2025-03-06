import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listacomentario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listacomentario.component.html',
})
export class ListacomentarioComponent implements OnInit {

  @Input() postId!: string;
  comments: any[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (!this.postId) {
      this.errorMessage = 'No se recibió el ID del post.';
      this.isLoading = false;
      return;
    }

    this.loadComments(this.postId);
  }

  loadComments(postId: string): void {
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .subscribe({
            next: (comments) => {
                const allComments = comments as any[];

                if (allComments.length >= 3) {
                    this.comments = allComments.slice(0, 3);
                } else {
                    this.comments = allComments;
                }

                this.isLoading = false;
            },

        });
  }
}
