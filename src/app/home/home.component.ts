import { Component } from "@angular/core";

//Interpolation or expressions {{}}
//Property binding []
//Event binding ()
//Two way binding ngModel
//Class binding
//Style binding

@Component({
    selector: 'app-home',
    template: `

    <input type="text" [(ngModel)]="title" placeholder="Enter text"/>

    <button [style.border]="title?'3px solid gray':'none'" [disabled]="getTitle()">Click me</button>

    <button [class.bg]="title" (click)="onClick()" >Button 2</button>

    <select (change)="onChange()">
        <option>C</option>
        <option>C#</option>
        <option>C++</option>
        <option>Java</option>
    </select>

    {{1+2}}

    <h1> {{"Sheldon" + " Cooper"}}</h1>

    <h1>{{title}}</h1>

    <h2>{{getTitle()}}</h2>

    {{1===2?"Yes":"No"}}




    `
})
export class HomeComponent {
    title: string = "Angular Web";

    getTitle() {
        //side effects
        //complex logic
        return this.title;
    }

    onChange() {
        console.log("Dropdown list changed");
    }

    onClick() {
        console.log("Button clicked");
    }
}