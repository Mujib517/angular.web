import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users;

  constructor(httpClient: HttpClient) {

    this.users = httpClient.get("https://api.github.com/users");
    // .subscribe(
    //   response => this.users = response,
    //   err => console.log(err),
    //   () => console.log('completed')
    // );
  }
}
