import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../shared/product.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-products',
    templateUrl: './product-list.html'
})
export class ProductsComponent implements OnInit, OnDestroy {
    products: any[];
    product: any = {};
    obs;

    constructor(private productSvc: ProductService, private fb: FormBuilder, private route: ActivatedRoute) { }

    ngOnInit() {
        var response = this.route.snapshot.data["response"];
        this.products = response ? response.products : [];
        //this.get();
    }

    get() {
        this.obs = this.productSvc.get()
            .subscribe(
            response => {
                this.products = response["products"];
                console.log(this.products);
            },
            err => console.log(err)
            );
        this.product = {};
    }

    onNotify(data) {
        console.log("got notification from child");
        this.get();
    }

    onUpdateNotify(product) {
        console.log("Updated notifiction");
    }

    ngOnChanges() {

    }

    ngOnDestroy() {
        //this.obs.unsubscribe();
    }
}
