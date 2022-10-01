import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './component/pet/pet.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import { TodoComponent } from './component/todo/todo.component';
import { FormComponent } from './component/form/form.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { TimelinesComponent } from './component/timelines/timelines.component';
import { YoutubePlaylistComponent } from './component/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './component/youtube-player/youtube-player.component';
import { DictionaryComponent } from './component/dictionary/dictionary.component';
import { DictionaryDetailComponent } from './component/dictionary-detail/dictionary-detail.component';
import {HttpClientModule} from "@angular/common/http";

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
    CountdownTimerComponent,
    TodoComponent,
    FormComponent,
    UserFormComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    DictionaryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
