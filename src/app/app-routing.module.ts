import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { SignupComponent } from './Auth/components/signup/signup.component';
import { LoginComponent } from './Auth/components/login/login.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { OrdersComponent } from './dashboard/components/orders/orders.component';
import { ProductsComponent } from './dashboard/components/products/products.component';
import { ProductListComponent } from './dashboard/components/product-list/product-list.component';
import { ProductFormComponent } from './dashboard/components/product-form/product-form.component';
import { HomeComponent } from './Home/home/home.component';
import { ContactComponent } from './contact/contact/contact.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'shop',
    component: AllProductsComponent,
  },
  {
    path: 'details/:id',
    component: ProductsDetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', component: OrdersComponent },
      {
        path: 'products',
        component: ProductsComponent,
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },

          { path: 'list', component: ProductListComponent },
          { path: 'add', component: ProductFormComponent, pathMatch: 'full' },
        ],
      },
    ],
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
