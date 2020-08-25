/*
 * @Author: fracong
 * @Date: 2020-08-18 09:22:50
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-21 09:20:33
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { NavSingleButtonComponent } from './nav/nav-single-button/nav-single-button.component';
import { RangkListComponent } from './list/ranking-list/ranking-list.component';
import { RankingItemTitlePipe } from './list/ranking-list/ranking-item-title.pipe';
import { NavCategoryComponent } from './nav/nav-category/nav-category.component';
import { NavVerticalComponent } from './nav/nav-vertical/nav-vertical.component';
import { CarouselNomalComponent } from './carousel/carousel-nomal/carousel-nomal.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavSingleButtonComponent,
    RangkListComponent,
    RankingItemTitlePipe,
    NavCategoryComponent,
    NavVerticalComponent,
    CarouselNomalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'Window', useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
