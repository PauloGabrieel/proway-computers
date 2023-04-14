import { Injectable } from '@angular/core';
import { IProductCart } from './mock/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProductCart[] = [];
  
  constructor() { }


  getCart() {
    this.items = JSON.parse(localStorage.getItem("cart") || "[]");
    return this.items;
  }

  addToCart(product: IProductCart) {
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  cleanTheCart() {
    this.items = [];
    localStorage.clear();
  }

  removeProduct(productId: number) {
    this.items = this.items.filter(item => item.id !== productId )
    localStorage.setItem("cart", JSON.stringify(this.items));
  }
}

