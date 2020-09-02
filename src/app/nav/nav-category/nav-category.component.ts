/*
 * @Author: fracong
 * @Date: 2020-08-20 13:45:45
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-02 17:51:47
 */
import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NavCategoryItem, NavCategoryInfo, NavDropDownItem } from 'src/app/model/nav-style/nav-style.model';

@Component({
  selector: 'app-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.scss']
})
export class NavCategoryComponent implements OnInit {
  @Input('navInfo') navInfo: NavCategoryInfo;
  @Input('navItemList') navItemList: Array<NavCategoryItem>;
  @Output('categoryNavNode') categoryNavNode = new EventEmitter<any>();
  @ViewChildren('dropDown') dropDown: QueryList<ElementRef>;
  isHover:boolean;
  hoverNavKeyNum: number;
  isDown: boolean;
  remarkIsUpDownMap: Map<number, boolean> = new Map<number, boolean>();
  isShowDropDown: boolean;
  remarkDropDownNum: number; 
  remarkDropDownActiveMap: Map<number, NavDropDownItem> = new Map<number, NavDropDownItem>();
  remarkItemNavType: string;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) bodyClick(e: any) {
    if(getTrigger(this.dropDown)){
      this.isShowDropDown = false;
    }
    function getTrigger(queryList) {
      let flag=  true;
      (<HTMLElement[]>e.path).forEach(i=>{
        flag && queryList.forEach(el => {
          i.isEqualNode && i.isEqualNode(el.nativeElement) && (flag = false)
        });
      });
      return flag;
    }
  }

  changeNav(navKeyNum: number, itemNavType: string) {
    let isDownPre = this.remarkIsUpDownMap.get(navKeyNum);
    if (itemNavType == 'up-down') {
      if(this.navInfo.activeNum == navKeyNum) {
        let isDown = (isDownPre == undefined) ? false : !isDownPre;
        this.remarkIsUpDownMap.set(navKeyNum, isDown);
      } else if (isDownPre == undefined) {
        this.remarkIsUpDownMap.set(navKeyNum, false);
      }
    } else if (itemNavType == 'drop-down') {
      this.isShowDropDown = !this.isShowDropDown;
      this.isHover = false;
      this.remarkDropDownNum = navKeyNum; // change which drop down is show or hide.
      this.remarkItemNavType = itemNavType;
      return;
    } else if (this.navInfo.activeNum == navKeyNum) {
      return;
    }
    this.navInfo.activeNum = navKeyNum;
    this.remarkItemNavType = itemNavType;
    this.backNavInfo(navKeyNum, itemNavType);
  }

  isNavActiveColor(navKeyNum: number) {
    return this.navInfo.activeNum == navKeyNum || (this.isHover && this.hoverNavKeyNum == navKeyNum) ? this.navInfo.activeColor : '#a6a6a6';
  }

  isNavActiveWeight(navKeyNum: number) {
    return this.navInfo.activeNum == navKeyNum ? '700' : '400';
  }

  isActiveDropDown(item: any) {
    return item.itemNavType == 'drop-down' && this.navInfo.activeNum==item.navKeyNum && item.dropDownActiveNum && item.dropDownActiveNum != 0;
  }

  selectDropDownItem(navKeyNum: number, itemNavType: string, dropDownItem: NavDropDownItem) {
    let flag = false;
    this.navItemList.forEach(element=>{
      if(navKeyNum == element.navKeyNum) {
        if (element.dropDownActiveKey == dropDownItem.key && this.navInfo.activeNum == navKeyNum) {
          flag = true;
          return;
        }
        element.dropDownActiveKey = dropDownItem.key;
        element.dropDownActiveTitle = dropDownItem.title;
      }
    });
    if(flag) return;
    this.navInfo.activeNum = navKeyNum;
    this.remarkDropDownActiveMap.set(navKeyNum, dropDownItem);
    this.backNavInfo(navKeyNum, itemNavType);
  }

  rightClick(activeRightKey: number,rightKey: number){
    if(activeRightKey == rightKey) return;
    this.navInfo.rightIconActiveKey = rightKey;
    activeRightKey = rightKey;
    let backInfo = {
      navType: this.navInfo.navType,
      rightKey: rightKey,
    };
    this.categoryNavNode.emit(backInfo);
  }

  backNavInfo(navKeyNum: number, itemNavType: string) {
    let backInfo: any;
    if (itemNavType == 'up-down') {
      backInfo = {
        navType: this.navInfo.navType,
        itemKey:navKeyNum,
        orderByDown: !this.remarkIsUpDownMap.get(navKeyNum),
      };
    } else if (itemNavType == 'drop-down') {
      backInfo = {
        navType: this.navInfo.navType,
        itemKey:navKeyNum,
        activeDropDownKey: this.remarkDropDownActiveMap.get(navKeyNum).key,
      };
    }else {
      backInfo = {
        navType: this.navInfo.navType,
        itemKey: navKeyNum
      };
    }
    this.categoryNavNode.emit(backInfo);
  }
}
