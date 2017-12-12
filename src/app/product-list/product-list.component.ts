import { Component } from "@angular/core";
import { ProductService } from "../shared/product.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
            brand: ['Nokia', [Validators.required]],
            model: ['X8', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            price: [200],
            inStock: [true]
        });
        this.get();
    }

    onSave() {
        this.product.inStock = this.product.inStock || false;
        if (this.frm.valid)
            console.log(this.frm.value);
        else
            console.log("validation failed");
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
