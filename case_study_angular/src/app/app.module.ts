import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import { FacilityUpdateComponent } from './component/facility/facility-update/facility-update.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { ListContractComponent } from './component/contract/list-contract/list-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    HeaderComponent,
    FacilityListComponent,
    HomeComponent,
    FooterComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
    ListCustomerComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    ListContractComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
