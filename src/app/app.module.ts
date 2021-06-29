import { BigbasketdataService } from './bigbasketdata.service';
import { AmazondataService } from './amazondata.service';
import { ProductsdataService } from './productsdata.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PriceupdaterComponent } from './priceupdater/priceupdater.component';
import { HeaderComponent } from './header/header.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductlistComponent,
    InventoryComponent,
    MenuComponent,
    PagenotfoundComponent,
    PriceupdaterComponent,
    HeaderComponent,
    UserlistComponent,
    RegistrationComponent,
    UserdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // importing Routing Module
    FormsModule,
    ReactiveFormsModule, // reavtive forms modeule
    HttpClientModule // provides methods (get, put,...)
  ],
  providers: [{ provide: ProductsdataService, useClass: BigbasketdataService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
