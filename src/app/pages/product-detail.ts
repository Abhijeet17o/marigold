
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from '../components/carousel';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, CarouselComponent],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.scss']
})
export class ProductDetail {
  product = {
    name: 'Gejje Vastramala 12 inch',
    desc: 'Handmade cotton mala, perfect for pooja and gifting. Premium quality, soft cotton, traditional design.',
    images: [
      'assets/images/mala_12_inch.jpg',
      'assets/images/mala_12_inch.jpg',
      'assets/images/mala_12_inch.jpg',
    ],
    price: 99,
    discount: 10,
    keywords: 'pooja, handmade, cotton, mala, traditional, gejje, vastramala'
  };
}
