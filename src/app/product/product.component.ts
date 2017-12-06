import { Component,Input } from '@angular/core';


@Component({
    selector: 'app-product',
    template: `
    <h3>{{product.brand}} {{product.model}}</h3>
    <div>{{product.price}}</div>
    <div>InStock: <input disabled="true" type="checkbox" [checked]="product.inStock" /></div>`
})
export class ProductComponent {
    @Input()
    product: any;
}