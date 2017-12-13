import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
    selector: 'app-product',
    template: `
        <h3><a [routerLink]="'/products/'+product._id">{{product.brand | uppercase}} {{product.model | lowercase}}</a></h3>
        <div>{{product.price | currency:'INR'}}</div>
        <div>InStock: <input disabled="true" type="checkbox" [checked]="product.inStock" />
        <div>{{product.lastUpdated |date:"MM-dd-yyyy"}}  
        </div>
        <div>{{product.lastUpdated|time}}</div>

        <div class="pull-right">
            <button class="btn btn-primary btn-sm" (click)="onUpdate(product)">Update</button>
            <button class="btn btn-danger btn-sm" (click)="onDelete(product._id)">Delete</button>
        </div>
        <br/>
    `
})
export class ProductComponent {
    @Input()
    product: any;

    @Output()
    notify: EventEmitter<any>;

    @Output()
    updateNotify: EventEmitter<any>;

    constructor(private productSvc: ProductService) {
        this.notify = new EventEmitter<any>();
        this.updateNotify = new EventEmitter<any>();
    }

    onDelete(id) {
        this.productSvc.delete(id)
            .subscribe(
            () => this.notify.emit({ message: "hello parent" }),
            (err) => console.log(err)
            )
    }

    onUpdate(product) {
        delete product.img;
        delete product.__v;
        delete product.lastUpdated;
        delete product._id;
        console.log(product);

        this.updateNotify.emit(product);
    }
}