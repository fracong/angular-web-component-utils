/*
 * @Author: fracong
 * @Date: 2020-08-19 16:21:30
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-21 15:51:04
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem, RankInfo } from 'src/app/model/list-style/list-style.model';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.scss']
})
export class RangkListComponent implements OnInit {
  @Input('ifMore') ifMore: boolean = false;
  @Input('rankInfo') rankInfo: RankInfo;
  @Input('rankItemList')  rankItemList: Array<ListItem>;
  @Output('rankListRightNote') rankListRightNote = new EventEmitter<any>();
  ifMoreHover:boolean;

  constructor() { }

  ngOnInit() {
  }
  
  changeRight(type: string) {
    if(this.rankInfo.titleRight.navActiveType == type) return;
    this.rankInfo.titleRight.navActiveType = type;
    let backInfo = {
      rankingType: this.rankInfo.rankingType,
      type:type
    };
    this.rankListRightNote.emit(backInfo);
  }

  setMinWidth(size: number){
    return this.rankInfo.langZh? (28+ 14*size+'px'):(28+ 7*size+'px');
  }
}
