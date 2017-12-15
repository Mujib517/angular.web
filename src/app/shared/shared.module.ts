import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { ProductResolve } from "./product.resolve";
import { UserService } from "./user.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from "./interceptor";


@NgModule({
    declarations: [TimePipe],
    providers: [ProductService, ProductResolve, UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        }
    ],
    exports: [TimePipe]
})
export class SharedModule { }