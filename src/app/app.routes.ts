import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PostsoloComponent } from './paginas/postsolo/postsolo.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'post/:id', component: PostsoloComponent }, 
];
