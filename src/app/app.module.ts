import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './service/customer.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { OrderService } from './service/order.service';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    CustomerListComponent,
    OrderListComponent,
    HomeComponent,
    AddCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ProductService,
    CustomerService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
