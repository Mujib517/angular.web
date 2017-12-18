import { AboutComponent } from './about.component';


describe("About Component", () => {

    let comp: AboutComponent;

    beforeEach(() => {
        comp = new AboutComponent();
    });


    it("should have myProperty undefined", () => {
        expect(comp.myProperty).toBeUndefined();
    });

    describe("Init", () => {

        it("Should set value to myProperty", () => {
            comp.ngOnInit();
            //expect(comp.myProperty).toBeDefined();
            expect(comp.myProperty).toBe("Some Value");
        });
    });

});