import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './component/pet/pet.component';
import {FormsModule} from "@angular/forms";
import { ProductComponent } from './component/product/product.component';
import { CalculatorComponent } from './component/calculator/calculator.component';
import { ColorComponent } from './component/color/color.component';
import { ArticleComponent } from './component/article/article.component';
import { LikeComponent } from './component/like/like.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { NameCardComponent } from './component/name-card/name-card.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { RatingBarComponent } from './component/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './component/countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    ProductComponent,
    CalculatorComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
