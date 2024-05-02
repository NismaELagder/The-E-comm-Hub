import { Component, Input } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(private service: DashboardService) {}
  ngOnInit() {
    this.getSellerProducts();
  }
  // @Input() products!: any[];
  products!: any[];
  seller_id = JSON.parse(localStorage.getItem('currentUser')!)?.id;

  getSellerProducts() {
    this.service
      .getSellerProducts(this.seller_id)
      .subscribe((data) => (this.products = data));
  }
  deleteProduct(productId: string) {
    this.service
      .deleteProduct(productId)
      .subscribe(
        (product: any) =>
          (this.products = this.products.filter(
            (product) => product.id !== productId
          ))
      );
  }
}
