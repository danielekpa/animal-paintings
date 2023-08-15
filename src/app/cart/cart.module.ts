import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { SharedModules } from '../shared/sharedmodules/sharedmodules.module';

@NgModule({
  declarations: [
    CartViewComponent
  ],
  imports: [
    CommonModule,
    SharedModules
  ]
})
export class CartModule { }
