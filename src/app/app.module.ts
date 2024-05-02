import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { SignupComponent } from './Auth/components/signup/signup.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { LogoutComponent } from './Auth/components/logout/logout.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { OrdersComponent } from './dashboard/components/orders/orders.component';
import { ProductsComponent } from './dashboard/components/products/products.component';
import { ProductListComponent } from './dashboard/components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './dashboard/components/product-form/product-form.component';
import { HomeComponent } from './Home/home/home.component';
import { ContactComponent } from './contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    ProductListComponent,
    ProductFormComponent,
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ProductsModule,
    CartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
