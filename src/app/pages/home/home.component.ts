import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userEmailAndPassAutoValue!: string;


  constructor(
    private router: Router,
    private authService: AuthService
  ) {}


  loadMenu() :void{
    this.router.navigate(['/menu']);
  }

  ngOnInit() :void{
   this.generateEmailAndPassValue();


  }

  generateEmailAndPassValue(){
   this.userEmailAndPassAutoValue = Math.random().toString(36).substr(2, 9);
   return this.userEmailAndPassAutoValue;
  }

  onSignUpIn(email: string, password: string) {
    this.authService.signUp(email, password);
    setTimeout(() => {
      this.authService.signIn(email, password);
    }, 3000);
  }
}
