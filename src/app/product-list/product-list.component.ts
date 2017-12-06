import { Component } from "@angular/core";

@Component({
    selector: 'app-products',
    template: `<h1>Products</h1>
  
    <div class="well" *ngFor="let prd of products">
        <app-product [product]="prd"></app-product>
    </div>


    `
})
export class ProductsComponent {
    products: any[];

    constructor() {
        this.products = [
            { id: 1, brand: "Nokia", model: "N8", price: 200, inStock: true },
            { id: 2, brand: "Samsung", model: "S8", price: 800, inStock: true },
            { id: 3, brand: "Apple", model: "Iphone X", price: 1200, inStock: false }
        ];
    }
}