import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';



const appRoutes: Routes = [
 {path: '', component: HomeComponent},
 {path: 'menu', component: MenuComponent},
 {path: 'about', component: AboutComponent},
 {path: 'contact', component: ContactComponent},
 {path: 'shopCart', component: ShopCartComponent},
 {path: 'checkOut', component: CheckOutComponent},
 {path: 'error-page', component: ErrorPageComponent, data: {message: 'Error Occurred: Page Not Found!'}},
 {path: '**', redirectTo: '/error-page'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule { }
