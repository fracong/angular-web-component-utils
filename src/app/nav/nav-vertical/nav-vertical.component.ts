/*
 * @Author: fracong
 * @Date: 2020-08-21 09:18:49
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-21 12:49:44
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

  setItemColor(isHover:boolean, type: string){
    let color = (this.navInfo.activeType == type && this.navInfo.activeColor)?this.navInfo.activeColor:((isHover &&  this.navInfo.activeType != type)? this.navInfo.hoverColor:undefined)
    return color;
  }

  changeItem(type: string) {
    if (this.navInfo.activeType == type) return;
    this.navInfo.activeType = type;
    let backInfo = {
      navType: this.navInfo.navType,
      itemKey:type
    };
    this.verticalNavNode.emit(backInfo);
  }

}
