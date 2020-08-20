/*
 * @Author: Farton_Fang
 * @Date: 2020-08-18 09:22:50
 * @LastEditors: Farton_Fang
 * @LastEditTime: 2020-08-18 11:06:35
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path:'',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
