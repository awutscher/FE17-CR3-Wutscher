import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component'
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "aboutus",
    component: AboutusComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "menu/products/:productId",
    component: DetailsComponent
  },
  {
    path: "cart",
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
