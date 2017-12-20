import { ProductDetailComponent } from './product-detail.component';
import { Observable } from 'rxjs/Observable';


describe("Product Detail Component", () => {

    let comp: ProductDetailComponent;
    let svc = jasmine.createSpyObj("productSvc", ["getById"]);
    let activatedRoute = jasmine.createSpyObj("activatedRoute", ["snapshot"]);

    activatedRoute.snapshot = {
        params: {
            id: 10
        }
    };

    beforeEach(() => {
        let obs = new Observable(o=>{
            o.next(1),
            o.next(2),
            o.next(3)
        });
        svc.getById = jasmine.createSpy("getById").and.returnValue(obs);
        comp = new ProductDetailComponent(svc, activatedRoute);
    });


    it('should make a webservice call', () => {
        comp.ngOnInit();

        expect(svc.getById).toHaveBeenCalledWith(10);
    });

});