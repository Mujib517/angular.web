import { Component } from "@angular/core";
import { LoggerService } from "../shared/logger.service";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-home',
    template: `

    <mat-toolbar>
        <button mat-button>Home</button>
        <button mat-button>About</button>
    </mat-toolbar>

    <button mat-button>Click</button>
    <button mat-raised-button>Click</button>
    <button mat-fab>
        <i class="fa fa-plus"></i>
    </button>

    <button mat-mini-fab>
    <i class="fa fa-plus"></i>
</button>

<mat-checkbox></mat-checkbox>

<mat-form-field>
    <input type="text" matInput placeholder="Name"/>
</mat-form-field>


<mat-select placeholder="Select Item">
    <mat-option value="1">Option 1</mat-option>
    <mat-option value="2">Option 2</mat-option>
</mat-select>

<mat-radio-group>
<mat-radio-button value="1">Option 1</mat-radio-button>
<mat-radio-button value="2">Option 2</mat-radio-button>
</mat-radio-group>

<mat-slide-toggle>on</mat-slide-toggle>
<mat-spinner></mat-spinner>
    `
})
export class HomeComponent {

}