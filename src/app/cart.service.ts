import { Injectable } from '@angular/core';
import { Product } from './products';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public items: Product[] = [];
  public total: number = 0;

  private cartVisibility = new BehaviorSubject<boolean>(false);
  cartVisibility$ = this.cartVisibility.asObservable();

  private totalPrice = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPrice.asObservable();

  public toggleCart(show: boolean): void {
    this.cartVisibility.next(show);
  }

  public addToCart(product: Product, quantity: number): void {
    const existingItem = this.items.find(
      (cartItem) => cartItem.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      product.quantity = quantity;
      this.items.push(product);
    }

    this.updateTotal();
    Swal.fire({
      text: `${product.title} added to cart!`,
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }

  private updateTotal(): void {
    const total = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.totalPrice.next(total);
  }

  public getItems(): Product[] {
    return this.items;
  }

  public removeItem(item: Product): void {
    this.items = this.items.filter((i) => i.id !== item.id);
    this.updateTotal();
  }
}