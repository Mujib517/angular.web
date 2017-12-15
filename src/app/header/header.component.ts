import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
  <div class="container">
      <div class="navbar navbar-inverse">
          <div class="navbar-brand">My Cool Products</div>
          <ul class="navbar-nav nav">
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/about">About</a></li>
              <li><a routerLink="/products">Products</a></li>
              <li><a routerLink="/contact">Contact</a></li>
          </ul>

          <div class="pull-right">
              <a routerLink="/login" class="btn btn-sm btn-danger">Login</a>
          </div>
      </div>
  </div>
</header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
