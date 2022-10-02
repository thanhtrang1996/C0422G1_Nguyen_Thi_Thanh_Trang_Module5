import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ListContractComponent} from "./list-contract/list-contract.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListContractComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
