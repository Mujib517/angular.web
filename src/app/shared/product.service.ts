import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {

    constructor(obj:any) { }

    get(): any[] {
        return [
            { id: 1, brand: "Nokia", model: "N8", price: 200, inStock: true, created: Date.now() },
            { id: 2, brand: "Samsung", model: "S8", price: 800, inStock: true, created: Date.now() },
            { id: 3, brand: "Apple", model: "Iphone X", price: 1200, inStock: false, created: Date.now() }
        ];
    }
}