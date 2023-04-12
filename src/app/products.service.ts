import { Injectable } from '@angular/core';
import { IProduto, produtos } from './mock/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduto[] = produtos
  constructor() { }

  getAll() {
    return this.products;
  }

  getById(productId: number) {
    return this.products.find(product => product.id === productId);
  }
}
