import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth, private router: Router) { }

  async signup(email:string, password: string, mobile:string) {
    try {
     const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
     return userCredential;
    } catch(error:any) {
      console.error('Signup error:', error.message);
      throw new Error(error.message);
    }
  }

  async login(email:string, password:string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      return userCredential;
    } catch(error:any) {
      console.error('Login Failed', error.message);
      throw new Error(error.message);
    }
  }

  async logout() {
    try {
      await this.auth.signOut(); // Sign the user out
      this.router.navigate(['/login']); // Redirect to login after logout
    } catch (error) {
      console.error('Error occurred while logging out:', error); // Log any errors that occur during logout
    }
  }
}
