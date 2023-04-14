import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  descricao: string ="";

  constructor(
    private router: Router
  ) {}

  search(){
    if(this.descricao) {
        this.router.navigate(["products"], { queryParams: {descricao: this.descricao}});
        return;
    }

    this.router.navigate(["products"]);
  }
}
