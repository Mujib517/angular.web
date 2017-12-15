import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { ProductsComponent } from "../product-list/product-list.component";
import { ProductResolve } from "./product.resolve";
import { NewProductComponent } from "../new-product/new-product.component";
import { ProductDetailComponent } from "../product-detail/product-detail.component";
import { SpecsComponent } from "../specs/specs.component";
import { ReviewsComponent } from "../reviews/reviews.component";
import { LoginComponent } from "../login/login.component";


const CHILDREN = [
    { path: 'specs', default: true, component: SpecsComponent },
    { path: 'reviews', component: ReviewsComponent },
];

const ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsComponent, resolve: { response: ProductResolve } },
    { path: 'products/new', component: NewProductComponent },
    { path: 'products/:id', component: ProductDetailComponent, children: CHILDREN },
    { path: '**', component: HomeComponent }
];

@NgModule({
    declarations: [],
    providers: [],
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class RoutingModule { }