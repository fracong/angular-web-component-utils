/*
 * @Author: Farton_Fang
 * @Date: 2020-08-19 16:21:30
 * @LastEditors: Farton_Fang
 * @LastEditTime: 2020-08-20 15:48:20
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
  
  changeRight(active:boolean, type: string) {
    if(active) return;
    this.rankInfo.rightList.forEach(element => {
      if (element.type == type) {
        element.ifActive = true;
      } else {
        element.ifActive = false;
      }
    });
    this.rankListRightNote.emit(type);
  }
}
