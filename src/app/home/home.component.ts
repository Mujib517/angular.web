import { Component } from "@angular/core";
import { LoggerService } from "../shared/logger.service";

@Component({
    selector: 'app-home',
    template: `
    <h1>Home Page</h1>
    <h1 [dirShow]="showHeading">Heading</h1>
    <h1 *dirIf="showHeading">Heading 2</h1>
    `
})
export class HomeComponent {
    showHeading = true;

    constructor(private logger: LoggerService) { }

    ngOnInit() {
        this.logger.warn("Component took lot of time to load");
    }
}