import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    constructor(private httpClient: HttpClient) { }

    get() {
        return this.httpClient.get("https://express-api.herokuapp.com/api/products")
            .catch((err) => Observable.throw("Failed to load data"));
    }

    save(product: any) {
        return this.httpClient.post("https://express-api.herokuapp.com/api/products", product)
            .catch((err) => Observable.throw(err));
    }

    delete(id: string) {
        return this.httpClient.delete("https://express-api.herokuapp.com/api/products/" + id);
    }
}