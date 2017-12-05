import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
    <br/>
        <div class="col-md-5">
            <div *ngFor="let product of products" class="well">
                <h3>{{product.brand}} {{product.model}}</h3>
                <div>{{product.price}}</div>
                <div>InStock: <input disabled="true" type="checkbox" [checked]="product.inStock" /></div>
            </div>
        </div>
    `
})
export class HomeComponent {
    products: any[];

    constructor() {
        this.products = [
            { id: 1, brand: "Nokia", model: "N8", price: 200, inStock: true },
            { id: 2, brand: "Samsung", model: "S8", price: 800, inStock: true },
            { id: 3, brand: "Apple", model: "Iphone X", price: 1200, inStock: false }
        ];
    }
}