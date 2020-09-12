/*
 * @Author: fracong
 * @Date: 2020-08-18 09:22:50
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-12 21:58:15
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
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
import { NormalLabelPageComponent } from './label-page/normal-label-page/normal-label-page.component';
import { NavTagFilterComponent } from './nav/nav-tag-filter/nav-tag-filter.component';
import { TagAnnularComponent } from './tag/tag-annular/tag-annular.component';
import { IconArrowComponent } from './style-comp/icon/icon-arrow/icon-arrow.component';
import { PageNormalComponent } from './pagination/page-normal/page-normal.component';
import { TranslatePageInfoPipe } from './pagination/translate-page-info.pipe';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    IconTipComponent,
    NormalLabelPageComponent,
    NavTagFilterComponent,
    TagAnnularComponent,
    IconArrowComponent,
    PageNormalComponent,
    TranslatePageInfoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
    })
  ],
  providers: [{ provide: 'Window', useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
