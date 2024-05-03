import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  address: FormGroup = new FormGroup({
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private service: CartService) {}

  cartItems: any = localStorage.getItem('cart')!;
  totalPrice: number = 0;
  math = Math;
  showSuccess: boolean = false;
  today: Date = new Date();
  ngOnInit() {
    this.getCartProducts();
    this.getProductsTotalPrice();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem('cart')!);
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  getProductsTotalPrice() {
    this.totalPrice = 0;
    for (const product of this.cartItems) {
      this.totalPrice += product?.item.price * product?.quantity;
    }
    this.totalPrice = this.math.round(this.totalPrice);
  }

  addProductAmount(index: number) {
    this.cartItems[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.getProductsTotalPrice();
  }

  minusProductAmount(index: number) {
    this.cartItems[index].quantity--;
    localStorage.setItem('cart', JSON.stringify(this.cartItems));

    this.getProductsTotalPrice();
  }

  deleteCartProduct(index: number) {
    this.cartItems.splice(index, 1);
    console.log('delete', this.cartItems);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  resetCart() {
    this.cartItems = [];
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.totalPrice = 0;
  }
  confirmOrder() {
    for (const item of this.cartItems) {
      this.service
        .addToCart({ ...item, address: this.address.controls['address'].value })
        .subscribe((res) => console.log(res));
    }
  }
}
