import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListCustomerComponent} from "./list-customer/list-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {UpdateCustomerComponent} from "./update-customer/update-customer.component";


const routes: Routes = [
  {
    path: 'list',
    component: ListCustomerComponent
  }, {
    path: 'create',
    component: CreateCustomerComponent
  },
  {
    path: 'update/:id',
    component: UpdateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
