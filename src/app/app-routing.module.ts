import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreInfoProductComponent } from '../app/Components/more-info-product/more-info-product.component'
import { GridProductsComponent } from '../app/Components/grid-products/grid-products.component'
import { CatalogueComponent } from '../app/Components/catalogue/catalogue.component'

const routes: Routes = [
  { path: '', redirectTo: 'productos' , pathMatch: 'full' },
  { path: 'productos', component:GridProductsComponent },
  { path: 'masInfo', component:MoreInfoProductComponent },
  { path: 'catalogo', component:CatalogueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
