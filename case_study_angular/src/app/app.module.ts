import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    HeaderComponent,
    FacilityListComponent
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
