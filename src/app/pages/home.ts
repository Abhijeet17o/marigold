
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../components/carousel';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  featuredProducts = [
    {
      name: 'Gejje Vastramala 12 inch',
      desc: 'Handmade cotton mala, perfect for small pooja setups.',
      images: [
        'assets/images/mala_12_inch.jpg',
        'assets/images/mala_12_inch.jpg',
        'assets/images/mala_24_inch.jpg'
      ],
      price: 99,
      discount: 10
    },
    {
      name: 'Gejje Vastramala 18 inch',
      desc: 'Ideal for regular rituals and gifting.',
      images: [
        'assets/images/mala_12_inch.jpg',
        'assets/images/mala_12_inch.jpg',
        'assets/images/mala_12_inch.jpg',
      ],
      price: 129,
      discount: 15
    },
    {
      name: 'Gejje Vastramala 24 inch',
      desc: 'Premium length for grand celebrations.',
      images: [
        'assets/images/mala_12_inch.jpg',
        'assets/images/mala_12_inch.jpg',
        'assets/images/mala_12_inch.jpg',
      ],
      price: 159,
      discount: 20
    },
    {
      name: 'Handmade Garland',
      desc: 'Beautiful garland for special occasions.',
      images: [
        'assets/images/kapus_vastra.jpg',
        'assets/images/mala_12_inch.jpg'
      ],
      price: 199,
      discount: 25
    },
    {
      name: 'Artificial Mala',
      desc: 'Durable and vibrant artificial mala.',
      images: [
        'assets/images/kapus_vastra_plain.jpg',
        'assets/images/kapus_vastra_plain.jpg'
      ],
      price: 89,
      discount: 5
    }
  ];
}
