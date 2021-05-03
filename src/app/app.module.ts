import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';


import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PorkComponent } from './pages/pork/pork.component';
import { ChickenComponent } from './pages/chicken/chicken.component';
import { SandwichesComponent } from './pages/sandwiches/sandwiches.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    PorkComponent,
    ChickenComponent,
    SandwichesComponent,
    ShopCartComponent,
    ProductItemComponent,
    PageNotFoundComponent,
    CheckOutComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
