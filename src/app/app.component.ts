import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <app-header></app-header>

    <div class="container">
        <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
    `
})
export class AppComponent { }