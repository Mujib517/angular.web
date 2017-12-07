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
    products:any[];

    constructor(productSvc: ProductService) {
        //evil
        //let productSvc = new ProductService(1,2);
        productSvc.get()
            .subscribe(
            response => {
                this.products = response["products"];
                console.log(this.products);
            },
            err => console.log(err)
            );
    }
}

//structuremap, NInject

// let productSvc=new ProductService({});
// let productsComponent=new ProductsComponent(produtSvc);

