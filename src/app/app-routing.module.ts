import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ChickenComponent } from './pages/chicken/chicken.component';
import { PorkComponent } from './pages/pork/pork.component';
import { SandwichesComponent } from './pages/sandwiches/sandwiches.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';

const appRoutes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'about', component: AboutComponent},
 {path: 'pork', component: PorkComponent},
 {path: 'chicken', component: ChickenComponent},
 {path: 'sandwiches', component: SandwichesComponent},
 {path: 'contact', component: ContactComponent},
 {path: 'shopCart', component: ShopCartComponent},
 {path: 'checkOut', component: CheckOutComponent},
 {path: 'not-found', component: PageNotFoundComponent},
 {path: '**', redirectTo: '/not-found'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
