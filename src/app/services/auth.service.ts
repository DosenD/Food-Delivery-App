import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }

   async signUp(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
     this.isLoggedIn = true;
    // const userObject = res.user?.getIdToken()
     sessionStorage.setItem('user', JSON.stringify(res.user));
    // console.log(userObject)
    });
   }

   async signIn(email: string, password: string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
     this.isLoggedIn = true;
     sessionStorage.setItem('user', JSON.stringify(res.user));
    })
   }

  logOut(): void{
   this.firebaseAuth.signOut();
   sessionStorage.removeItem('user');
  }
}
