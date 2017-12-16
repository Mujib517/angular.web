import { AppComponent, HomeComponent, AboutComponent, ContactComponent, ProductsComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, NewProductComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, LoginComponent } from "./app.barrel";
import { NgModule,BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RoutingModule, SharedModule } from "./module.barrel";

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RoutingModule, SharedModule],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ContactComponent, ProductsComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, NewProductComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, LoginComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }