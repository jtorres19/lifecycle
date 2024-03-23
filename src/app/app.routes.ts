import { Routes } from '@angular/router';
import { ProductComponent } from "./products/pages/product/product.component";

export const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./products/products-routing.module').then((m) => m.ProductsRoutingModule),
    component: ProductComponent,
  }
];
