import { AppComponent, HomeComponent, AboutComponent, ContactComponent, ProductsComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, NewProductComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, LoginComponent } from "./app.barrel";
import { NgModule, BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RoutingModule, SharedModule } from "./module.barrel";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatCheckboxModule,
    MatInputModule, MatSelectModule, MatRadioModule,
    MatSlideToggleModule, MatProgressSpinnerModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule,
        ReactiveFormsModule, RoutingModule,
        SharedModule, BrowserAnimationsModule, MatProgressSpinnerModule, MatToolbarModule,
        MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatRadioModule, MatSlideToggleModule],
    declarations: [AppComponent, HomeComponent,
        AboutComponent, ContactComponent, ProductsComponent, ProductComponent, UsersComponent, HeaderComponent, FooterComponent, NewProductComponent, ProductDetailComponent, SpecsComponent, ReviewsComponent, LoginComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule { }