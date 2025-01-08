import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from "../login/login.component";
import { HeadComponent } from "../head/head.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeadComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
