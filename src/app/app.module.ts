import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { ProductService } from "./shared/product.service";
import { UsersComponent } from './users/users.component';
import { TimePipe } from "./shared/time.pipe";


@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ContactComponent, ProductsComponent, ProductComponent, UsersComponent,TimePipe],
    bootstrap: [AppComponent],
    providers: [ProductService]
})
export class AppModule { }