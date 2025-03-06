import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ],  
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    posts: any[] = [];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
            .subscribe((data: any) => {
                this.posts = data;
            });
    }
}
