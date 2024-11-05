import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../common/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  private searchProducts: Product[] = [];

  constructor(private router: Router) {}

  doSearch(value: string) {
    
    this.router.navigateByUrl(`/search/${value}`);
      
  }
}
