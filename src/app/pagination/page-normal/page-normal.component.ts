/*
 * @Author: fracong
 * @Date: 2020-09-12 10:58:31
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-12 22:08:02
 */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { Pagination } from 'src/app/model/table/table.model';

@Component({
  selector: 'app-page-normal',
  templateUrl: './page-normal.component.html',
  styleUrls: ['./page-normal.component.scss']
})
export class PageNormalComponent implements OnInit {
  @Input('pagination') pagination: Pagination;
  @Input('currentNum') currentNum: number;
  goNum: number;
  @Output('clickBack') clickBack = new EventEmitter<any>();
  type: string = 'center';
  infoDisplay: boolean = true;
  centerInfoType = 'right';
  firstPage = 1;
  pageInfo: string;
  totalPage: number = 0;
  btnNumList: Array<number> = new Array<number>();
  prePageNum: number;
  nextPageNum: number;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    if (!this.pagination) throw new Error('the pagination must have value!');
    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      this.pageInfo = this.translate.instant('pagination.page-info');
    });
    this.goNum = this.currentNum;
    this.totalPage = Math.ceil(this.pagination.totalNum / this.pagination.limit);
    this.initFirstPageNumBtn();
    this.changePreAndNextBtn();
    this.initPageType();
  }
  
  initFirstPageNumBtn() {
    let array = new Array<number>();
    for (let index = 0; index < this.pagination.displayNum && this.currentNum + index <= this.totalPage; index++) {
      array.push(this.currentNum + index);
    }
    let lessNum = this.pagination.displayNum - array.length;
    if (lessNum > 0) {
      let minNum = this.currentNum - (lessNum);
      for (let index = this.currentNum - 1; index >=  minNum && index > 0; index--) {
        array.push(index);
      }
    }
    this.btnNumList = array.sort((a, b) => a - b);
  }

  changePreAndNextBtn(){
    if (this.currentNum != 1) {
      this.prePageNum = this.currentNum - 1;
    }
    if (this.currentNum != this.totalPage) {
      this.nextPageNum = this.currentNum +1;
    }
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

  clickNumBtn(pageNum: number) {
    this.currentNum = pageNum;
    this.changePreAndNextBtn();
    this.clickBack.emit(pageNum);
  }

  clickPreNextBtn(pageNum: number) {
    if (pageNum > this.currentNum && this.btnNumList[this.btnNumList.length -1] == this.currentNum) {// next
      this.btnNumList.splice(this.btnNumList.indexOf(this.btnNumList[0]),1);
      this.btnNumList.push(this.currentNum+1);
    } else if (pageNum < this.currentNum && this.btnNumList[0] == this.currentNum) {// pre
      if(this.btnNumList.length >= this.pagination.displayNum) {
        this.btnNumList.splice(this.btnNumList.indexOf(this.btnNumList[this.btnNumList.length -1]), 1);
      }
      this.btnNumList.push(this.currentNum-1);
    }
    this.btnNumList = this.btnNumList.sort((a, b)=> a - b);
    this.currentNum = pageNum;
    this.changePreAndNextBtn();
    this.clickBack.emit(pageNum);
  }

  clickGo() {
    this.currentNum = Number(this.goNum);
    if (!this.btnNumList.includes(this.goNum)) {
      this.initFirstPageNumBtn();
    }
    this.clickBack.emit(this.goNum);
  }

}
