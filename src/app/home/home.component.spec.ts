import { HomeComponent } from './home.component';

describe("Home Component", () => {

    let comp: HomeComponent;
    let logger = jasmine.createSpyObj("logger", ["warn"]);

    beforeEach(() => {
        logger.warn = jasmine.createSpy("warn");
        comp = new HomeComponent(logger);
    });


    it('should have showheading set to true', () => {
        expect(comp.showHeading).toBe(true);
    });

    it('should call warn of loggerservice', () => {
        comp.ngOnInit();

        expect(logger.warn).toHaveBeenCalledWith("Component took lot of time to load");
    });
});