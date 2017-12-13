import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

    private baseUrl: string = environment.baseUrl;

    constructor(private httpClient: HttpClient) { }

    get() {
        return this.httpClient.get(this.baseUrl + "0/16")
            .catch((err) => Observable.throw("Failed to load data"));
    }

    getById(id: string) {
        return this.httpClient.get(this.baseUrl + id);
    }

    save(product: any) {
        return this.httpClient.post(this.baseUrl, product)
            .catch((err) => Observable.throw(err));
    }

    delete(id: string) {
        return this.httpClient.delete(this.baseUrl + id);
    }
}