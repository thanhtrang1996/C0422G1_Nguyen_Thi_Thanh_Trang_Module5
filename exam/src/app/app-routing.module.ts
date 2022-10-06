import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuanLyComponent} from './component/quan-ly/quan-ly.component';
import {CapNhatComponent} from './component/cap-nhat/cap-nhat.component';
import {TaoMoiComponent} from './component/tao-moi/tao-moi.component';



const routes: Routes = [{path: '',
component:QuanLyComponent},
  {path:'create',
  component:TaoMoiComponent},
  {
    path:':id',
    component:CapNhatComponent

  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
