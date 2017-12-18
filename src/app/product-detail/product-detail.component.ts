import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  id: string;
  constructor(private productSvc: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.productSvc.getById(this.id)
      .subscribe(
      data => {
        this.productSvc.cachedProduct = <Product>data;
        this.product = <Product>data;
        //LHS == RHS
      },
      err => console.log(err)
      );
  }

}
