import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { ProductService } from "./shared/product.service";
import { UsersComponent } from './users/users.component';
import { TimePipe } from "./shared/time.pipe";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductResolve } from "./shared/product.resolve";
import { SpecsComponent } from './specs/specs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RoutingModule } from "./shared/routing.module";
import { SharedModule } from "./shared/shared.module";
import { LoginComponent } from './login/login.component';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule,
        RoutingModule,SharedModule],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ContactComponent, ProductsComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, NewProductComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, LoginComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }