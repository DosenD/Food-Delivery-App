import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PorkComponent } from './pages/pork/pork.component';
import { ChickenComponent } from './pages/chicken/chicken.component';
import { SandwichesComponent } from './pages/sandwiches/sandwiches.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { ProductItemComponent } from './shared/product-item/product-item.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ProductNavComponent } from './shared/product-nav/product-nav.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductGroupComponent } from './shared/product-group/product-group.component';


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
    ProductNavComponent,
    MenuComponent,
    ProductGroupComponent,
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
  schemas: [
   CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
   HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
