import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    x!:any;  //For togglePasswordVisibility
    
  constructor(private as:AuthService, private router: Router) {}

  submit(email:any, password:any) {
   this.as.login(email.control.value, password.control.value).then((val) => {
    console.log(val);
    this.router.navigate(['/dashboard']);
    alert("Successfully Logged in");
   }).catch((val) => alert("Invalid Login credentials. Please try again!"));
  }

  gotosignup() {
    this.router.navigate(['/signup']);
  }

  toggleVisibility() {
    this.x = document.querySelector('#password');
    if(this.x.type === 'password') {
        this.x.type = 'text';
    } else {
        this.x.type = 'password';
    }
}
}
