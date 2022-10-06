import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product/product-list/product-list.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import {HttpClientModule} from "@angular/common/http";
import { CategoryListComponent } from './component/category/category-list/category-list.component';
import { CategoryCreateComponent } from './component/category/category-create/category-create.component';
import { CategoryUpdateComponent } from './component/category/category-update/category-update.component';
import {NgxPaginationModule} from "ngx-pagination";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
      HttpClientModule,
      NgxPaginationModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(
        {
          timeOut: 2000,
          closeButton: true,
          progressBar: true,
          positionClass: 'toast-top-center',
          preventDuplicates: true
        }
      ),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
