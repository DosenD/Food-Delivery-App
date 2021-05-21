import { TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './pages/about/about.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { CartItemComponent } from './shared/cart-item/cart-item.component';
import { ProductItemComponent } from './shared/product-item/product-item.component';

/*describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ShopCartComponent,
        ProductItemComponent,
        ErrorPageComponent,
        CheckOutComponent,
        CartItemComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'food-delivery-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('food-delivery-app');
  });

 /* it(`should render title 'food-delivery-app'`, () => {        // 'should render title'
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('food-delivery-app app is running!');
  });
});*/
