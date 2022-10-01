import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './component/product/product-list/product-list.component';
import {ProductCreateComponent} from './component/product/product-create/product-create.component';
import {ProductUpdateComponent} from "./component/product/product-update/product-update.component";
import {CategoryListComponent} from "./component/category/category-list/category-list.component";
import {CategoryCreateComponent} from "./component/category/category-create/category-create.component";
import {CategoryUpdateComponent} from "./component/category/category-update/category-update.component";


const routes: Routes = [
  {
    path: 'product/list',
    component: ProductListComponent
  }, {
    path: 'product/create',
    component: ProductCreateComponent
  }, {
    path: 'product/update/:id',
    component: ProductUpdateComponent
  }, {
    path: 'category/list',
    component: CategoryListComponent
  },
  {
    path: 'category/create',
    component: CategoryCreateComponent
  },
  {
    path: 'category/update/:id',
    component: CategoryUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
