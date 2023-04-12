import { Component, OnInit } from '@angular/core';
import { IProduto} from '../mock/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduto[] | undefined;

  constructor( 
    private productService: ProductsService
  ) {}
  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
}
