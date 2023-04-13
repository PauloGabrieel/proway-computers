import { Injectable } from '@angular/core';
import { IProductCart } from './mock/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProductCart[] = [];
  
  constructor() { }


  getCart() {
    const cart = JSON.parse(localStorage.getItem("cart") || "");
    return cart;
  }

  addToCart(product: IProductCart) {
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  cleanTheCart() {
    this.items = [];
    localStorage.clear();
  }
}

