import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListContractComponent} from "./list-contract/list-contract.component";


const routes: Routes = [
  {
    path: 'list',
    component:ListContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
