import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';

import {NavBarComponent } from '../components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,NavBarComponent,
  ],
  exports: [NavBarComponent]
  
})
export class CartModule { }
