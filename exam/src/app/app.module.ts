import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {QuanLyComponent} from './component/quan-ly/quan-ly.component';
import {CapNhatComponent} from './component/cap-nhat/cap-nhat.component';
import { TaoMoiComponent } from './component/tao-moi/tao-moi.component';

@NgModule({
  declarations: [
    AppComponent,
    QuanLyComponent,
    CapNhatComponent,
    TaoMoiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      progressBar: true,
      tapToDismiss: true
    }),
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
