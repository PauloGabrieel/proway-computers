import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProductCart } from '../mock/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: IProductCart[] = [] 
  cartTotal = 0

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calcTotal();    
  }

  calcTotal(){
    this.cartTotal = this.cartItems.reduce((prev, curr) => prev + (curr.preco * curr.amount), 0)
  }
  removeProduct(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartService.removeProduct(productId)
    this.calcTotal()
  }

  buy(){
    alert("Parabéns você finalizou a sua compra");
    this.cartService.cleanTheCart();
    this.router.navigate(["products"])
  }
}
