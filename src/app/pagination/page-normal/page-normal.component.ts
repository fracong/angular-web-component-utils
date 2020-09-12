/*
 * @Author: fracong
 * @Date: 2020-09-12 10:58:31
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-12 17:00:27
 */
import { Component, OnInit } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-page-normal',
  templateUrl: './page-normal.component.html',
  styleUrls: ['./page-normal.component.scss']
})
export class PageNormalComponent implements OnInit {
  type: string = 'center';
  infoDisplay: boolean = true;
  centerInfoType = 'right';
  lang = 'en';
  preBtnName = '上一页';
  nextBtnName = '下一页';
  row: number;
  total: number;
  firstPage = 1;
  pageInfo: string;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.lang = 'cn';
    this.initPageType();
    this.row = 3;
    this.total = 30;
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.pageInfo = this.translate.instant('pagination.page-info');
    });

  }

  initPageType() {
    if(!this.type) this.type = 'right';
    let pageInfo = document.querySelector('.fc-util .page-info') as HTMLElement;
    if (this.type == 'center') {
      if (!this.centerInfoType) this.centerInfoType = 'left';
      if (this.centerInfoType == 'left') {
        pageInfo.classList.add('fc-float-left');
      } else if (this.centerInfoType == 'right') {
        pageInfo.classList.add('fc-float-right');
      }
    } else if (this.type == 'left') {
      pageInfo.classList.add('fc-float-right');
    } else if (this.type == 'right') {
      pageInfo.classList.add('fc-float-left');
    }
  }

}