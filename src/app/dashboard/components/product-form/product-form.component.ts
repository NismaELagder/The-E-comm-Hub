import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  constructor(private service: DashboardService) {
    this.getAllCategories();
  }
  currentProduct: any = {
    title: '',
    description: '',
    category: '',
    image: '',
    price: '',
    rate: '',
  };
  categories: any = [];
  seller_id = JSON.parse(localStorage.getItem('currentUser')!)?.id;
  productMessage: string = '';

  getAllCategories() {
    this.service.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  addProduct() {
    this.service
      .addProduct(this.seller_id, this.currentProduct)
      .subscribe((res) => {
        this.productMessage = 'Product added successfully';
        this.currentProduct = {
          title: '',
          description: '',
          category: '',
          image: '',
          price: '',
          rate: '',
        };
      });
  }
  setProductCategory(event: any) {
    this.currentProduct.category = event.target.value;
  }
}
