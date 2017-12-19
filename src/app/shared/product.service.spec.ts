import { ProductService } from './product.service';
import { Observable } from 'rxjs/Observable';
import { Product } from './models/product.model';

describe("Product Service", () => {
    let svc: ProductService;
    let http;

    beforeEach(() => {
        http = jasmine.createSpyObj("http",["get","getById"]);
        let obs = new Observable(o=>{
            o.next(new Product())
        });

        http.get=jasmine.createSpy("get").and.returnValue(obs);
        http.getById=jasmine.createSpy("get").and.returnValue(obs);
        svc = new ProductService(http);
    });

    it('should make a get call to product service', () => {
        svc.get();
        expect(http.get).toHaveBeenCalledWith("https://express-api.herokuapp.com/api/products/0/16");
    });

    it('should make a get call to product service', () => {
        svc.getById("1");
        expect(http.get).toHaveBeenCalledWith("https://express-api.herokuapp.com/api/products/1");
    });
});