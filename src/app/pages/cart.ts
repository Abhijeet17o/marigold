import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class Cart {
  cartItems = [
    {
      name: 'Gejje Vastramala 12 inch',
      image: 'assets/images/mala_12_inch.jpg',
      price: 99,
      quantity: 2
    },
    {
      name: 'Handmade Garland',
      image: 'assets/images/mala_12_inch.jpg',
      price: 199,
      quantity: 1
    }
  ];

  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  increase(item: any) {
    item.quantity++;
  }
  decrease(item: any) {
    if (item.quantity > 1) item.quantity--;
  }
  remove(item: any) {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }
}
