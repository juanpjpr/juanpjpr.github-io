import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridProductsComponent } from './Components/grid-products/grid-products.component';
import { MoreInfoProductComponent } from './Components/more-info-product/more-info-product.component';
import { MenuLeftProductsComponent } from './Components/menu-left-products/menu-left-products.component';
import { CatalogueComponent } from './Components/catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    GridProductsComponent,
    MoreInfoProductComponent,
    MenuLeftProductsComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
