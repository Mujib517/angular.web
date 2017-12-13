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

const ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/new', component: NewProductComponent },
    { path: 'products/:id', component: ProductDetailComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule,
        RouterModule.forRoot(ROUTES)],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ContactComponent, ProductsComponent, ProductComponent, UsersComponent, TimePipe, HeaderComponent, FooterComponent, NewProductComponent, ProductDetailComponent],
    bootstrap: [AppComponent],
    providers: [ProductService]
})
export class AppModule { }