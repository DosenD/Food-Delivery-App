import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.scss']
})
export class ProductNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToMenu(){
   this.router.navigate(['/menu'])
  }
  checkCart(){
   this.router.navigate(['/shopCart'])
  }

}
