import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AllProductsComponent, ProductsDetailsComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserModule,
    CommonModule,
    RouterModule,
  ],
})
export class ProductsModule {}
