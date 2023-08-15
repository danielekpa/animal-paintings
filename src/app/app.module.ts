import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { SharedModules } from './shared/sharedmodules/sharedmodules.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CartModule,
    HttpClientModule,
    ProductModule,
    BrowserAnimationsModule,
    SharedModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
