import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { SwiperDirective } from './swiper.directive';
import { CartComponent } from './cart/cart.component';
import { BuyFormComponent } from './buy-form/buy-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import '@angular/common/locales/global/bg';

register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    BuyFormComponent,
    SwiperDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
