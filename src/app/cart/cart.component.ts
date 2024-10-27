import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormService } from '../form.service';

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  public show: boolean = false;
  public total: number = 0;
  public quantity: number = 1;
  public items: Product[];
  public showForm: boolean = false;

  constructor(private cartService: CartService,  private formService: FormService) {
    this.cartService.cartVisibility$.subscribe((visible) => {
      this.show = visible;
    });

    this.cartService.totalPrice$.subscribe((price) => {
      this.total = price;
    });

    this.items = this.cartService.getItems();
  }

  public onQuantityChange(): void {
    this.updateTotal();
  }

  public closeCart(): void {
    this.cartService.toggleCart(false);
  }

  public removeFromCart(item: Product): void {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  private updateTotal(): void {
    this.total = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  public showBuyForm(): void {
    this.formService.toggleForm(true);
  }
}
