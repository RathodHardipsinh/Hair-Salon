import { Component, inject } from '@angular/core';
import { HomePageComponent } from "../home-page/home-page.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [HomePageComponent,RouterOutlet,RouterLink],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  router = inject(Router)
  logout(){
    localStorage.removeItem('loginUser')
    this.router.navigateByUrl('login');
  }
}
