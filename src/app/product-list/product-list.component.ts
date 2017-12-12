import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../shared/product.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.html'
})
export class ProductsComponent implements OnInit,OnDestroy {
    products: any[];
    product: any = {};
    frm: FormGroup;
    obs;

    constructor(private productSvc: ProductService, private fb: FormBuilder) { }

    ngOnInit() {
        this.frm = this.fb.group({
            brand: ['', [Validators.required]],
            model: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            price: [],
            inStock: []
        });
        this.get();
    }

    onSave() {
        if (this.frm.valid) {
            this.productSvc.save(this.frm.value)
                .subscribe(
                () => this.get(),
                err => this.get(),
                () => console.log("Completed")
                );
        }

    }

    get() {
      this.obs= this.productSvc.get()
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
        this.frm.setValue(product);
    }

    ngOnChanges(){
        
    }

    ngOnDestroy() {
        this.obs.unsubscribe();
    }
}
