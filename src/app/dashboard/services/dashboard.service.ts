import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  addProduct(seller_id: string, product: any) {
    return this.http.post(
      'http://localhost:3000/products',
      { seller_id, item: product },
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  deleteProduct(product_Id: string) {
    return this.http.delete(`http://localhost:3000/products/${product_Id}`);
  }

  updateProduct(product_Id: string, product: any) {
    return this.http.put(
      `http://localhost:3000/products/${product_Id}`,
      JSON.stringify(product),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  getOrders(seller_id: string) {
    return this.http
      .get(`http://localhost:3000/carts`)
      .pipe(
        map((carts: any) =>
          carts.filter((cart: any) => cart.seller_id === seller_id)
        )
      );
  }

  getSellerProducts(seller_id: string) {
    return this.http
      .get(`http://localhost:3000/products`)
      .pipe(
        map((products: any) =>
          products.filter((product: any) => product.seller_id === seller_id)
        )
      );
  }
}
