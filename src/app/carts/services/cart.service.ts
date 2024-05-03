import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  addToCart(product: any) {
    return this.http.post(
      'http://localhost:3000/carts',
      JSON.stringify(product),
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
