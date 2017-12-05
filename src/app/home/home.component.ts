import { Component } from "@angular/core";

//Interpolation or expressions {{}}
//Property binding []
//Event binding ()
//Two way binding ngModel
//Class binding
//Style binding

@Component({
    selector: 'app-home',
    template: `<h1 [ngClass]="clsName">Home</h1>

    <div *ngIf="show" [ngStyle]="styles">
        This is a div
        <div>Complex div</div>
    </div>

    <div [ngSwitch]="priority">
        <div *ngSwitchCase="'High'">High Priority</div>
        <div *ngSwitchCase="'medium'">Medium Priority</div>
        <div *ngSwitchCase="'low'">Low Priority</div>
        <div *ngSwitchDefault>Very Low Priority</div>
    </div>
    

    <button (click)="toggle()">Toggle</button>
    
    <table border="1">
        <thead>
            <tr>
                <th>Value</th>
                <th>Index</th>
                <th>Even?</th>
                <th>Odd?</th>
                <th>First?</th>
                <th>Last?</th>
            </tr>
        </thead>
        <tr
        [ngClass]="evn?'table-bg1':'table-bg2'" 
        *ngFor="let val of arr;let idx=index;let evn=even; let odd=odd;let fst=first;let lst=last;">
            <td>{{val}}</td>
            <td>{{idx}}</td>
            <td>{{evn}}</td>
            <td>{{odd}}</td>
            <td>{{fst}}</td>
            <td>{{lst}}</td>
        </tr>
    </table>

    `
})
export class HomeComponent {
    arr: Array<number> = [1, 2, 3, 4, 5, 6];
    show: boolean = true;
    priority: string = "abc";
    clsName: string[] = ["bg", "fg"];
    styles: any = {
        'background-color': 'yellow',
        'color': 'red'
    };

    toggle() {

        // this.show = this.show ? false : true;

        this.show = !this.show;


        // if (this.show) {
        //     this.show = false;
        // }
        // else {
        //     this.show = true;
        // }
    }
}