import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { userdata } from '../Class/Class';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: userdata = new userdata();
  router = inject(Router);
  
  signin(){

      if(this.userObj.userName=="admin"&&this.userObj.password=="123"){
        alert("Login Suceessful")
        localStorage.setItem('loginUser',this.userObj.userName)
        this.router.navigateByUrl('head/Home-page');
      }
    else{
      alert('Wrong credentials ');
    }
  }
}
