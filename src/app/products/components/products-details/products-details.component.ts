import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
  id!: any;
  productDetails: any = {};
  isLoading: boolean = false;
  itemsCount: number = 1;
  cartProducts: any[] = [];
  rate = [];
  constructor(private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getProductDetails();
  }

  ngDoCheck() {
    this.rate = [].constructor(Math.floor(this.productDetails.item.rate));
  }

  getProductDetails() {
    this.isLoading = true;
    this.service.getProductDetails(this.id).subscribe((details) => {
      this.productDetails = details;
      this.isLoading = false;
      console.log(this.productDetails);
    });
  }
  addToCart(product: any) {
    if ('cart' in localStorage) {
      const check = JSON.parse(localStorage.getItem('cart')!)?.find(
        (item: any) =>
          item.item.title === product.item.title &&
          item.buyer_id === product.buyer_id
      );

      if (!check) {
        this.cartProducts.push({ ...product, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    }
  }
}
