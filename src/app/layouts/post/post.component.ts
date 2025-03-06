import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      console.log('Datos originales:', data);

      this.data = data;

      console.log('Datos procesados:', this.data);
    });
  }
}


