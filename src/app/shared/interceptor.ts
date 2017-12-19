import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do';


@Injectable()
export class Interceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req);
        // var token = localStorage.getItem("token");

        // var newReq = req.clone({ headers: req.headers.set("authorization", token) });

        // return next.handle(newReq)
        //     .do(
        //     (res: HttpEvent<any>) => console.log('interceptr', res["body"]))
        //     .catch(err => {
        //         console.log(err)
        //         return Observable.throw(err);
        //     });
    }
}