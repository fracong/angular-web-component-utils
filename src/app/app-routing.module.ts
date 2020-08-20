/*
 * @Author: fracong
 * @Date: 2020-08-18 09:22:50
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-20 17:49:24
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
