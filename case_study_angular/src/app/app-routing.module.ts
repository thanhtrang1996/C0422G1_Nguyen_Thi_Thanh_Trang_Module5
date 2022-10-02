import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";


const routes: Routes = [
  {
    path :'facility',
    loadChildren :()=>import('../app/component/facility/facility.module').then(module=>module.FacilityModule)
  },
  {
    path :'',
    component :HomeComponent
  },
  {
    path :'customer',
    loadChildren :()=>import('../app/component/customer/customer.module').then(module=>module.CustomerModule)
  },
  {
    path :'contract',
    loadChildren :()=>import('../app/component/contract/contract.module').then(module=>module.ContractModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
