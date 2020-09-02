/*
 * @Author: fracong
 * @Date: 2020-08-18 09:22:50
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-27 17:41:36
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
import { CarouselNormalComponent } from './carousel/carousel-normal/carousel-normal.component';
import { CarouselNormalInfoComponent } from './carousel/carousel-normal/carousel-nomal-info/carousel-normal-info.component';
import { NormalListComponent } from './list/normal-list/normal-list.component';
import { NormalTableComponent } from './table/normal-table/normal-table.component';
import { TransformHtmlPipe } from './pipe/transform-html.pipe';
import { IconTipComponent } from './tip/icon-tip/icon-tip.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavSingleButtonComponent,
    RangkListComponent,
    RankingItemTitlePipe,
    NavCategoryComponent,
    NavVerticalComponent,
    CarouselNormalComponent,
    CarouselNormalInfoComponent,
    NormalListComponent,
    NormalTableComponent,
    TransformHtmlPipe,
    IconTipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'Window', useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
