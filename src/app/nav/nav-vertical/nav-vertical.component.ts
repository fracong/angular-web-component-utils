/*
 * @Author: fracong
 * @Date: 2020-08-21 09:18:49
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-04 13:44:00
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavVerticalInfo, NavVerticalItem } from 'src/app/model/nav-style/nav-style.model';

@Component({
  selector: 'app-nav-vertical',
  templateUrl: './nav-vertical.component.html',
  styleUrls: ['./nav-vertical.component.scss']
})
export class NavVerticalComponent implements OnInit {
  @Input('navInfo') navInfo: NavVerticalInfo;
  @Input('navItemList')  navItemList: Array<NavVerticalItem>;
  @Output('verticalNavNode') verticalNavNode = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  setItemColor(isHover:boolean, key: number){
    let color = (this.navInfo.activeKey == key && this.navInfo.activeColor)?this.navInfo.activeColor:((isHover &&  this.navInfo.activeKey != key)? this.navInfo.hoverColor:undefined)
    return color;
  }

  changeItem(key: number) {
    if (this.navInfo.activeKey == key) return;
    this.navInfo.activeKey = key;
    let backInfo = {
      navType: this.navInfo.navType,
      itemKey:key
    };
    this.verticalNavNode.emit(backInfo);
  }

}
