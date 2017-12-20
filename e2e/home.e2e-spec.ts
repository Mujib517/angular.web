import { browser, element, by } from 'protractor';

describe("Home Page", () => {

    browser.get("/");

    it('should have title angular.web', () => {
        expect(browser.getTitle()).toBe("Angular.Web");
    });

    it('should navigate to about page', () => {
        let abtLink = element(by.css("a[routerlink='/about']"));
        abtLink.click();

        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/about");
    });

    it('should have about page heading', () => {
        let h1 = element.all(by.css('h1'));
        let heading = h1.get(0);

        expect(heading.getText()).toBe("About Page");
    });

    it("should navigate to add product page", () => {
        let link = element(by.css("a[routerlink='/products']"));
        link.click();

        let btn = element(by.css("a.btn.btn-success.btn-sm"));
        btn.click();

        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products/new");
    });

    it('should have button disabled', () => {
        let btn = element(by.css("button.btn.btn-success"));

        expect(btn.isEnabled()).toBe(false);
    });

    xit('should have button enabled', () => {
        let brand = element(by.css("select"));
        let model = element(by.css("input[type='text']"));
        let price = element(by.css("input[type='number']"));
        let inStock = element(by.css("input[type='checkbox']"));

        brand.sendKeys("Apple");
        model.sendKeys("Iphone X");
        model.clear();
        price.sendKeys(500);

        let errSpan = element.all(by.css("span.text-danger"));
        browser.sleep(2000);
        expect(errSpan.isDisplayed()).toBe(true);
    });

    it('should have button enabled', () => {
        let brand = element(by.css("select"));
        let model = element(by.css("input[type='text']"));
        let price = element(by.css("input[type='number']"));
        let inStock = element(by.css("input[type='checkbox']"));

        brand.sendKeys("Apple");
        model.sendKeys("Iphone X");
        price.sendKeys(500);

        let btn = element(by.css("button.btn.btn-success"));

        expect(btn.isEnabled()).toBe(true);
    });

    it('should Save product', () => {
        let btn = element(by.css("button.btn.btn-success"));
        btn.click();
        browser.waitForAngular();
        expect(browser.getCurrentUrl()).toBe("http://localhost:49152/products");
    });
});