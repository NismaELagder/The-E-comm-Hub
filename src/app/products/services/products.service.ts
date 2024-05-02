import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get('http://localhost:3000/products');
  }

  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getProductsByCategory(category: String) {
    if (category == 'all') {
      return this.getAllProducts();
    } else {
      return this.getAllProducts().pipe(
        map((products: any) =>
          products.filter((product: any) => product.item.category === category)
        )
      );
    }
  }

  getProductDetails(id: any) {
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
}
