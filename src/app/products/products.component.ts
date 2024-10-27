import { Component } from '@angular/core';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  public products = products;

  constructor(private cartService: CartService) {}

  public addToCart(product: Product): void {
    product.size = 'XS';
    this.cartService.addToCart(product, 1);
  }
}
