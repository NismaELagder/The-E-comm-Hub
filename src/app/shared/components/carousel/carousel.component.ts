import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  ngOnInit() {
    setInterval(() => {
      this.nextIndex(this.currentIndex);
    }, 2500);
  }
  items = [
    {
      imageUrl:
        'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg',

      alt: 'Image 1',
    },
    {
      imageUrl:
        'https://i.pinimg.com/736x/b6/5c/d6/b65cd6feecf653803e5c864c23540d54.jpg',
      alt: 'Image 2',
    },
    {
      imageUrl:
        'https://intheblouse.elementor.cloud/wp-content/uploads/elementor/thumbs/timeless-pieces-every-woman-45-1-qazeiryq96rnsigysb84xbvmkmh28ll2ixdwg61dgk.png',
      alt: 'Image 3',
    },
    {
      imageUrl:
        'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/09/13162855/Men%E2%80%99s-Wardrobe-Design-Double-Hanging.jpg',

      alt: 'Image 4',
    },
  ];

  currentIndex = 0;
  nextIndex(index: number) {
    index < this.items.length - 1
      ? ++this.currentIndex
      : (this.currentIndex = 0);
  }

  prevIndex(index: number) {
    index == 0
      ? (this.currentIndex = this.items.length - 1)
      : --this.currentIndex;
  }
}
