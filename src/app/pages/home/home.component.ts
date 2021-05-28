import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  emailAutoValue!: string;
  passAutoValue!:string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartservice: CartService,
    private authService: AuthServiceService
  ) {}
 

  loadMenu() {
    this.router.navigate(['/menu']);  
  }

  ngOnInit() {
   this.generateEmailValue();
   this.generatePasswordValue();
   console.log(this.emailAutoValue)
   console.log(this.passAutoValue)
  
  }
  generateEmailValue(){
   this.emailAutoValue = ' ' + Math.random().toString(36).substr(2, 9);
   return this.emailAutoValue;
  }
  generatePasswordValue(){
   this.passAutoValue = ' ' + Math.random().toString(36).substr(2, 9);
   return this.passAutoValue;
  }

 

  onSignUpIn(email: string, password: string) {
    this.authService.signUp(email, password);
    setTimeout(() => {
      this.authService.signIn(email, password);
    }, 3000);
  }
}
