import { MathService } from './math.service';


describe("Math Service", () => {

    let calc;

    beforeEach(() => {
        calc = new MathService();
    });


    it("should add two numbers and return result", () => {
        //AAA : arrange act assert
        //RGR  
        let result = calc.add(5, 10);
        expect(result).toBe(15);
    });

    it("Should return zero when first parameter is zero", () => {
        let result = calc.add(0, 20);
        expect(result).toBe(0);
    });

    it("Should return -1 when second parameter is zero", () => {
        let result = calc.add(10, 0);
        expect(result).toBe(-1);
    });

    afterEach(() => {
        calc = null;
    });
});