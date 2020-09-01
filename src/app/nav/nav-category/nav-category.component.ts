/*
 * @Author: fracong
 * @Date: 2020-08-20 13:45:45
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-01 09:33:23
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavCategoryItem, NavCategoryInfo } from 'src/app/model/nav-style/nav-style.model';

@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.scss']
})
export class NavCategoryComponent implements OnInit {
  @Input('navInfo') navInfo: NavCategoryInfo;
  @Input('navItemList') navItemList: Array<NavCategoryItem>;
  @Output('categoryNavNode') categoryNavNode = new EventEmitter<any>();
  isDown: boolean;
  // remarkKeyNum: number;
  remarkIsUpMap: Map<number, boolean> = new Map<number, boolean>();
  constructor() { }

  ngOnInit() {
  }

  changeNav(navKeyNum: number, itemNavType: string) {
    let isDownPre = this.remarkIsUpMap.get(navKeyNum);
    if (itemNavType == 'up-down' && this.navInfo.activeNum == navKeyNum) {
      let isDown = (isDownPre == undefined) ? false : !isDownPre;
      this.remarkIsUpMap.set(navKeyNum, isDown);
    } else if (itemNavType == 'up-down' && isDownPre == undefined) {
      this.remarkIsUpMap.set(navKeyNum, false);
    }
    if (this.navInfo.activeNum == navKeyNum && itemNavType != 'up-down') return;
    this.navInfo.activeNum = navKeyNum;
    let backInfo: any;
    if(itemNavType == 'up-down') {
      backInfo = {
        navType: this.navInfo.navType,
        itemKey:navKeyNum,
        orderByDown: !this.remarkIsUpMap.get(navKeyNum),
      };
    } else {
      backInfo = {
        navType: this.navInfo.navType,
        itemKey: navKeyNum
      };
    }
    this.categoryNavNode.emit(backInfo);
  }
}
