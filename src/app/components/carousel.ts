import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  template: `
    <div class="carousel">
      <button class="carousel-btn prev" (click)="prev()" aria-label="Previous image">&#10094;</button>
      <img [src]="images[current]" class="carousel-img" [alt]="alt || 'Product image'" />
      <button class="carousel-btn next" (click)="next()" aria-label="Next image">&#10095;</button>
      <div class="carousel-dots">
        <span *ngFor="let img of images; let i = index" 
              [class.active]="i === current" 
              (click)="goTo(i)"></span>
      </div>
    </div>
  `,
  styleUrls: ['./carousel.scss']
})
export class CarouselComponent {
  @Input() images: string[] = [];
  @Input() alt: string = '';
  current = 0;

  prev() {
    this.current = (this.current - 1 + this.images.length) % this.images.length;
  }
  next() {
    this.current = (this.current + 1) % this.images.length;
  }
  goTo(i: number) {
    this.current = i;
  }
}
