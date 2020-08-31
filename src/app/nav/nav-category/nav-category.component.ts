/*
 * @Author: fracong
 * @Date: 2020-08-20 13:45:45
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-31 17:19:48
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
  remarkKeyNum: number;
  constructor() { }

  ngOnInit() {
  }

  changeNav(navKeyNum: number, itemNavType: string) {
    if(itemNavType == 'up-down' && (this.isDown == undefined || this.remarkKeyNum == navKeyNum)) {
      this.isDown = (this.isDown == undefined) ? false : !this.isDown;
    }
    this.remarkKeyNum = navKeyNum;
    if (this.navInfo.activeNum == navKeyNum && itemNavType != 'up-down') return;
    this.navInfo.activeNum = navKeyNum;
    let backInfo: any;
    if(itemNavType == 'up-down') {
      backInfo = {
        navType: this.navInfo.navType,
        itemKey:navKeyNum,
        orderByDown: !this.isDown,
      };
    } else {
      backInfo = {
        navType: this.navInfo.navType,
        itemKey:navKeyNum
      };
    }
    this.categoryNavNode.emit(backInfo);
  }

}
