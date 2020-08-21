/*
 * @Author: fracong
 * @Date: 2020-08-20 13:45:45
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-21 11:34:34
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

  constructor() { }

  ngOnInit() {
  }

  changeNav(navKeyNum: number) {
    if (this.navInfo.activeNum == navKeyNum) return;
    this.navInfo.activeNum = navKeyNum;
    let backInfo = {
      navType: this.navInfo.navType,
      itemKey:navKeyNum
    };
    this.categoryNavNode.emit(backInfo);
  }

}
