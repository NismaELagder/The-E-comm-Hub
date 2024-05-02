import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    CarouselComponent,
    CategoryCardComponent,
    ServicesComponent,
    FooterComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, CommonModule, RouterModule, FormsModule],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    CarouselComponent,
    CategoryCardComponent,
    ServicesComponent,
    FooterComponent,
    ProductComponent,
  ],
})
export class SharedModule {}
