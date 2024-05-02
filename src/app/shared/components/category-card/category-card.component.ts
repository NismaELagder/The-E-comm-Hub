import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  @Input() category: string = '';
  src: string = '';
  ngOnInit() {
    if (this.category == 'electronics') {
      this.src =
        'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg';
    } else if (this.category == 'jewelery') {
      this.src =
        'https://i.pinimg.com/736x/b6/5c/d6/b65cd6feecf653803e5c864c23540d54.jpg';
    } else if (this.category == `women's clothing`) {
      this.src =
        'https://intheblouse.elementor.cloud/wp-content/uploads/elementor/thumbs/timeless-pieces-every-woman-45-1-qazeiryq96rnsigysb84xbvmkmh28ll2ixdwg61dgk.png';
    } else {
      this.src =
        'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/09/13162855/Men%E2%80%99s-Wardrobe-Design-Double-Hanging.jpg';
    }
  }
}
