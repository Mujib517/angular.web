import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
    
    constructor(private httpClient: HttpClient) {}

    get() {
        return this.httpClient.get("https://express-api.herokuapp.com/api/products");
    }
}