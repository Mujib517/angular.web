import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-reviews',
  template: `
  <div>
  <h1>Product Reviews</h1>
  <hr/>
  <h3 *ngIf="product.reviews?.length==0">Be the first one to review</h3>
  <div *ngFor="let review of product.reviews">
    <h4>{{review.subject}} {{review.rating}}</h4>
    <p>{{review.review}}</p>
    <hr/>
  </div>
</div>
  `,
  styles: []
})
export class ReviewsComponent implements OnInit {

  product;

  constructor(private productSvc: ProductService) {

  }

  ngOnInit() {
    this.product = this.productSvc.cachedProduct;
  }

}
