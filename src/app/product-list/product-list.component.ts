import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";

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

    constructor(productSvc:ProductService) {
        //evil
        //let productSvc = new ProductService(1,2);
        this.products = productSvc.get();
    }
}  

//structuremap, NInject

// let productSvc=new ProductService({});
// let productsComponent=new ProductsComponent(produtSvc);

