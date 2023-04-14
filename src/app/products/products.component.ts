import { Component, OnInit } from '@angular/core';
import { IProduto} from '../mock/products';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: IProduto[] | undefined;

  constructor( 
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const products = this.productService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();    
      if(descricao) {
        this.products = products.filter(product => product.descricao.toLowerCase().includes(descricao))
        return
      }

      this.products = products;
    })
  }
}
