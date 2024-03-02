import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private as:AuthService, private router: Router){}

  submit(email:any, password:any, mobile:any, form:any) {
     console.log(email, password, mobile, form);
     if((email.control.value.trim()=='') || (password.control.value.trim()=='')) {
       alert("Please fill the form");
     } else {
      this.as.signup(email.control.value, password.control.value, mobile.control.value).then((val) => {
        console.log(val);
        alert("Registration Successful!")
        this.router.navigate(['/login']);
      }).catch((err) => console.log(err));
     }
  }

  gotologin() {
    this.router.navigate(['/login']);
  }
}
