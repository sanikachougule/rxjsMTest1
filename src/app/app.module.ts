import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UserFormComponent } from './shared/components/home/user-form/user-form.component';
import { Consumer1Component } from './shared/components/home/consumer1/consumer1.component';
import { Consumer2Component } from './shared/components/home/consumer2/consumer2.component';
import { Consumer3Component } from './shared/components/home/consumer3/consumer3.component';
import { CardComponent } from './shared/components/home/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    UserFormComponent,
    Consumer1Component,
    Consumer2Component,
    Consumer3Component,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
