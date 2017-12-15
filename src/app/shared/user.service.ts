import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";


@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    login(user) {
        let url = environment.baseUrl + "api/users/login";
        return this.httpClient.post(url, user);
    }

    saveToken(token) {
        localStorage.setItem('token', token);
    }
}