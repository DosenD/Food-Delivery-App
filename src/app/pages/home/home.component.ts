import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private cartservice: CartService) { }

  loadPork(){
   this.router.navigate(['/pork'])

  }

 ngOnInit(): void {
   
 }
  
  
}
