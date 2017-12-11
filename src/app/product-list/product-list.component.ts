import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.html'
})
export class ProductsComponent {
    products: any[];
    product: any = {};
    frm: FormGroup;

    constructor(private productSvc: ProductService, private fb: FormBuilder) {
        this.frm = fb.group({
            brand: [],
            model: ['X8'],
            price: [200],
            inStock: [true]
        });
        this.get();
    }

    onSave() {
        this.product.inStock = this.product.inStock || false;

        console.log(this.frm.value);
        // this.productSvc.save(this.product)
        //     .subscribe(
        //     () => this.get(),
        //     err => this.get(),
        //     () => console.log("Completed")
        //     )
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
