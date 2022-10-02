import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacilityRoutingModule } from './facility-routing.module';
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";
import {FacilityUpdateComponent} from "./facility-update/facility-update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
  ],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class FacilityModule { }
