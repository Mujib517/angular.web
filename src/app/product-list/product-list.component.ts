import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";

@Component({
    selector: 'app-products',
    templateUrl: './product-list.html'
})
export class ProductsComponent {
    products: any[];
    product: any = {};

    constructor(private productSvc: ProductService) {
        this.get();
    }

    onSave() {
        this.product.inStock = this.product.inStock || false;
        this.productSvc.save(this.product)
            .subscribe(
            () => this.get(),
            err => this.get(),
            () => console.log("Completed")
            )
    }

    get() {
        this.productSvc.get()
            .subscribe(
            response => {
                this.products = response["products"];
                console.log(this.products);
            },
            err => console.log(err)
            );
        this.product = {};
    }
}
