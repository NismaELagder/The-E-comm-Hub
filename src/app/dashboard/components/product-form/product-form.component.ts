import { Component } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  currentProduct: FormGroup;
  categories: any = [];
  seller_id = JSON.parse(localStorage.getItem('currentUser')!)?.id;
  currentCategory: string = '';
  constructor(private service: DashboardService) {
    this.getAllCategories();
    this.currentProduct = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl(1, [Validators.required, Validators.min(1)]),
      rate: new FormControl('', [Validators.min(0), Validators.max(4)]),
    });
  }

  getAllCategories() {
    this.service.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
  addProduct() {
    const product = {
      title: this.currentProduct.controls['title'].value,
      description: this.currentProduct.controls['description'].value,
      category: this.currentCategory,
      image: this.currentProduct.controls['image'].value,
      price: this.currentProduct.controls['price'].value,
      rate: this.currentProduct.controls['rate'].value,
    };
    this.service.addProduct(this.seller_id, product).subscribe((res) => {
      this.currentProduct.reset();
    });
    console.log(this.currentProduct.controls['title'].value);
  }

  setProductCategory(event: any) {
    this.currentCategory = event.target.value;
  }
}
