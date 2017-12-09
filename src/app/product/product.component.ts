import { Component, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';



@Component({
    selector: 'app-product',
    template: `
        <h3>{{product.brand | uppercase}} {{product.model | lowercase}}</h3>
        <div>{{product.price | currency:'INR'}}</div>
        <div>InStock: <input disabled="true" type="checkbox" [checked]="product.inStock" />
        <div>{{product.lastUpdated |date:"MM-dd-yyyy"}}  
        </div>
        <div>{{product.lastUpdated|time}}</div>

        <div class="pull-right">
            <button class="btn btn-danger btn-sm" (click)="onDelete(product._id)">Delete</button>
        </div>
        <br/>
    `
})
export class ProductComponent {
    @Input()
    product: any;

    constructor(private productSvc: ProductService) { }

    onDelete(id) {
        this.productSvc.delete(id)
            .subscribe(
            () => console.log("Deleted"),
            (err) => console.log(err)
            )
    }
}