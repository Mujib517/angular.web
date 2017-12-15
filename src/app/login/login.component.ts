import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
   <div class="col-md-5">
      <div class="form-group">
          <input type="text" placeholder="Email" class="form-control" [(ngModel)]="user.email"/>
      </div>
      <div class="form-group">
          <input type="password" placeholder="Password" class="form-control" [(ngModel)]="user.password"/>
      </div>
      <div class="form-group">
          <button (click)="login()" class="btn btn-success">Login</button>
      </div>
   </div>
  `
})
export class LoginComponent implements OnInit {
  user;
  constructor(private userSvc: UserService, private route: Router) {
    this.user = {};
  }



  ngOnInit() {
  }

  login() {
    this.userSvc.login(this.user)
      .subscribe(
      data => {
        this.userSvc.saveToken(data["token"]);
        this.route.navigate(["/products"]);
      },
      err => console.log(err)
      );
  }

}
