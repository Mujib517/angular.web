import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-product',
    template: `
    <h3>{{product.brand | uppercase}} {{product.model | lowercase}}</h3>
    <div>{{product.price | currency:'INR'}}</div>
    <div>InStock: <input disabled="true" type="checkbox" [checked]="product.inStock" />
    <div>{{product.created |date:"MM-dd-yyyy"}}  
    </div>

    `
})
export class ProductComponent {
    @Input()
    product: any;
}