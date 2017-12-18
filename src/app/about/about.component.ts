//Component dir    Template 
// Structural dir  ngFor ngIf ngSwitch
// Attribute dir   ngModel ngClass ngStyle

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html'
})
export class AboutComponent {
  myProperty: any;

  ngOnInit() {
    this.myProperty = "Some Value";
  }
}
