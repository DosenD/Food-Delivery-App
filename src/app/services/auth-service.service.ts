import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }

  
   async signUp(email:string, password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res=> {
     this.isLoggedIn = true;
     sessionStorage.setItem('user', JSON.stringify(res.user));
    })
   }
 
   async signIn(email:string, password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=> {
     this.isLoggedIn = true;
     sessionStorage.setItem('user', JSON.stringify(res.user));
    })
   }

  signUpAndIn(){
   this.signUp;
   this.signIn;
  }

  
  logOut(): void{
   this.firebaseAuth.signOut();
   sessionStorage.removeItem('user');
  }
 

}
