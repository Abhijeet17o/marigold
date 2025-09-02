import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class Products {
  products = [
    {
      id: 1,
      name: 'Gejje Vastramala 12 inch',
      desc: 'Handmade cotton mala, perfect for pooja and gifting.',
      price: 99,
      discount: 10,
      image: 'assets/images/mala_12_inch.jpg',
    },
    {
      id: 2,
      name: 'Gejje Vastramala 18 inch',
      desc: 'Premium quality, soft cotton, traditional design.',
      price: 129,
      discount: 15,
      image: 'assets/images/mala_12_inch.jpg',
    },
    {
      id: 3,
      name: 'Gejje Vastramala 24 inch',
      desc: 'Long mala for special rituals and celebrations.',
      price: 149,
      discount: 20,
      image: 'assets/images/mala_12_inch.jpg',
    },
    {
      id: 4,
      name: 'Handmade Garland',
      desc: 'Beautiful garland for pooja and decor.',
      price: 199,
      discount: 5,
      image: 'assets/images/kapus_vastra.jpg',
    },
    {
      id: 5,
      name: 'Artificial Mala',
      desc: 'Durable, reusable, and vibrant artificial mala.',
      price: 89,
      discount: 0,
      image: 'assets/images/kapus_vastra_plain.jpg'
    }
  ];

  addToCart(product: any) {
    // Implement cart logic here
    alert(`${product.name} added to cart!`);
  }
}
