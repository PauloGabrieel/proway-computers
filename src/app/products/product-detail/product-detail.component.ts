import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { IProductCart, IProduto } from 'src/app/mock/products';
import { NotificationService } from 'src/app/notification.service';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product: IProduto | undefined;
  amount = 1
  
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"))
    this.product = this.productService.getById(productId)
  }

  addToCart() {
    this.notificationService.notification("O produto foi adicionado ao carrinho")
    const product: IProductCart = {
      ...this.product!,
      amount: this.amount 
    } 
    this.cartService.addToCart(product)
  }
}
