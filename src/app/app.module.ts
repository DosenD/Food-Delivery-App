import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
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
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ProductNavComponent } from './shared/product-nav/product-nav.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductGroupComponent } from './shared/product-group/product-group.component';
import { ProductOverviewComponent } from './shared/product-overview/product-overview.component';


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
    CheckOutComponent,
    CartItemComponent,
    ProductNavComponent,
    MenuComponent,
    ProductGroupComponent,
    ErrorPageComponent,
    ProductOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    HttpClientModule,
  ],
  schemas: [
   CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
   HeaderComponent
  ],
  providers: [],
  entryComponents: [
   ProductItemComponent
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
