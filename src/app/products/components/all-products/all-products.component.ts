import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  products: Product[] = [];
  categories: string[] = [];
  currentCategory: string = '';
  loading: boolean = false;
  latestProducts: Product[] = [];
  cartProducts: any[] = [];

  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe((results: any) => {
      this.products = results;
      this.latestProducts = results.slice(results.length - 8);
      this.loading = false;

      console.log(this.products);
    });
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe((categories: any) => {
      this.categories = categories;
      this.loading = false;
    });
  }

  getProductsByCategory(category: string) {
    this.loading = true;

    this.service.getProductsByCategory(category).subscribe((res: any) => {
      this.products = res;
      console.log('category', this.products);
      this.loading = false;
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
        this.cartProducts.push(product);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    }
  }
}
