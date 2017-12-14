import { Resolve } from '@angular/router';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductResolve implements Resolve<any> {

    constructor(private productSvc: ProductService) { }

    resolve() {
        return this.productSvc.get();
    }
}