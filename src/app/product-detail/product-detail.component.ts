import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {
  product: any = {};
  id: string;
  constructor(private productSvc: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];

    this.productSvc.getById(this.id)
      .subscribe(
      data => {
        this.productSvc.cachedProduct = data;
        this.product = data
      },
      err => console.log(err)
      );
  }

}
