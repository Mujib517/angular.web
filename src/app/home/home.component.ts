import { Component } from "@angular/core";
import { LoggerService } from "../shared/logger.service";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-home',
    template: `
    <h1>Home Page</h1>
    <h1 [dirShow]="showHeading">Heading</h1>
    <h1 *dirIf="showHeading">Heading 2</h1>

    <h1>{{count}}</h1>

    <button (click)="inc()" class="btn btn-success">++</button>
    `
})
export class HomeComponent {
    showHeading = true;
    count = 0;

    constructor(private logger: LoggerService) { }

    ngOnInit() {
        // this.httpClient.get('https://api.github.com/users')
        //     .subscribe(() => this.count++);

        this.logger.warn("Component took lot of time to load");
    }

    inc() {
        this.count++;
    }
}