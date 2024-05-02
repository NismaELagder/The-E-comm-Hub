import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/models/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private Router: Router) {}
  @Input() product!: any;
  @Output() sendProduct = new EventEmitter();
  rate: [] = [];
  showNew: boolean = false;
  ngOnInit() {
    if (this.Router.url === '/') {
      this.showNew = true;
    }
  }
  ngDoCheck() {
    this.rate = [].constructor(Math.floor(this.product.item.rate));
  }

  addToCart() {
    this.sendProduct.emit({
      item: this.product?.item,
      quantity: 1,
      seller_id: this.product.seller_id,
      buyer_id: JSON.parse(localStorage.getItem('currentUser')!)?.id,
    });
  }
}
