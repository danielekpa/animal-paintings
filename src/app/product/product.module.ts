import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModules } from '../shared/sharedmodules/sharedmodules.module';

@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    SharedModules
  ],
})
export class ProductModule { }
