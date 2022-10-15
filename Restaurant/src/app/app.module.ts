import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
/* import { OrderformComponent } from './orderform/orderform.component'; */


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutusComponent,
    DetailsComponent,
    OrderComponent,
    MenuComponent,
    /* OrderformComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
