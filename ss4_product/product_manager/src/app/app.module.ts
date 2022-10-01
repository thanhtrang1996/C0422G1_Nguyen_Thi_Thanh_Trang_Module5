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
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
