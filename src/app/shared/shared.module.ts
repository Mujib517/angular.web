import { NgModule } from "@angular/core";
import { TimePipe } from "./time.pipe";
import { ProductService } from "./product.service";
import { ProductResolve } from "./product.resolve";


@NgModule({
    declarations: [TimePipe],
    providers: [ProductService, ProductResolve],
    exports: [TimePipe]
})
export class SharedModule { }