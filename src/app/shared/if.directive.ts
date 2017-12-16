import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";


@Directive({
    selector: '[dirIf]',
    inputs: ['dirIf']
})
export class IfDirective {

    constructor(private template: TemplateRef<any>, private container: ViewContainerRef) { }

    set dirIf(val: boolean) {

        if (val) {
            this.container.createEmbeddedView(this.template);
        }
        else {
            this.container.clear();
        }
    }
}