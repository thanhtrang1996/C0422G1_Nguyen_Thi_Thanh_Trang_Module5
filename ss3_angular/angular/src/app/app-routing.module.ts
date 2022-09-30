import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {YoutubePlaylistComponent} from './component/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from "./component/youtube-player/youtube-player.component";
import {DictionaryComponent} from "./component/dictionary/dictionary.component";
import {DictionaryDetailComponent} from "./component/dictionary-detail/dictionary-detail.component";

const routes: Routes = [
  // {
  //   path: 'youtube',
  //   component: YoutubePlaylistComponent,
  //   children: [{
  //     path: ':id',
  //     component: YoutubePlayerComponent
  //   }]
  // }
  {path :"",component :DictionaryComponent
 },{ path :":id",component :DictionaryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
