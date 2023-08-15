import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortOrder: string = ""

  constructor(
    private productService: ProductService,
    private cartservice: CartService,
    private _snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = products
    });
  }

  addToCart(product: Product): void {
    this.cartservice.addToCart(product).subscribe({
      next: () => {
        this._snackBar.open('Product added to cart', "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        })
      }
    });
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value?.toLocaleLowerCase();

    this.filteredProducts = this.products.filter(product => product.name?.toLocaleLowerCase().includes(searchTerm))

    this.sortProducts(this.sortOrder)
  }

  sortProducts(sortValue: string): void {
    this.sortOrder = sortValue

    if (this.sortOrder === 'priceLowHigh') {
      this.filteredProducts.sort((a, b) => a.price - b.price)
    } else if (this.sortOrder === 'priceHighLow') {
      this.filteredProducts.sort((a, b) => b.price - a.price)
    }
  }
}