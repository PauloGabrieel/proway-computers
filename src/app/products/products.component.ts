import { Component } from '@angular/core';
import { IProduto,produtos } from '../mock/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProduto[] = produtos;
}
