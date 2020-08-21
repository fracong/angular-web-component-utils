/*
 * @Author: fracong
 * @Date: 2020-08-19 16:21:30
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-21 09:11:45
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
  @Input('ifTitleRight') ifTitleRight: boolean = false;
  @Input('rankInfo') rankInfo: RankInfo;
  @Input('rankItemList')  rankItemList: Array<ListItem>;
  @Output('rankListRightNote') rankListRightNote = new EventEmitter<any>();
  ifMoreHover:boolean;

  constructor() { }

  ngOnInit() {
  }
  
  changeRight(type: string) {
    if(this.rankInfo.rightActiveType == type) return;
    this.rankInfo.rightActiveType = type;
    this.rankListRightNote.emit(type);
  }
}
