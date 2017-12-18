import { ProductDetailComponent } from './product-detail.component';

describe("Home Component", () => {

    let comp: ProductDetailComponent;
    let svc = jasmine.createSpyObj("productSvc", ["getById"]);
    let activatedRoute = jasmine.createSpyObj("activatedRoute", ["snapshot"]);

    activatedRoute.snapshot = {
        params: {
            id: 10
        }
    };

    beforeEach(() => {
        svc.getById = jasmine.createSpy("getById").and.returnValue({ subscribe: function () { }});
        comp = new ProductDetailComponent(svc, activatedRoute);
    });


    fit('should make a webservice call', () => {
        comp.ngOnInit();

        expect(svc.getById).toHaveBeenCalledWith(10);
    });

});