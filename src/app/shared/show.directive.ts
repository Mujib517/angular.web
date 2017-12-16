import { Directive, ElementRef, Renderer } from "@angular/core";


@Directive({
    selector: '[dirShow]',
    inputs: ['dirShow']
})
export class ShowDirective {

    constructor(private el: ElementRef, private renderer: Renderer) { }

    set dirShow(val: boolean) {
        if (val) {
            //this.el.nativeElement.style.display = 'block';
            this.renderer.setElementStyle(this.el.nativeElement, "display", "block");
        }
        else {
            //this.el.nativeElement.style.display = 'none';
            this.renderer.setElementStyle(this.el.nativeElement, "display", "none");
        }
    }
}