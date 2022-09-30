import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './component/product/product-list/product-list.component';
import {ProductCreateComponent} from './component/product/product-create/product-create.component';
import {ProductUpdateComponent} from "./component/product/product-update/product-update.component";


const routes: Routes = [{
  path: '',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: ProductCreateComponent
},{
  path:'product/update/:id',
  component :ProductUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
