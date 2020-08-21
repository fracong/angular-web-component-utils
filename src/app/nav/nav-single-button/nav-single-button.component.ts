/*
 * @Author: fracong
 * @Date: 2020-08-18 11:04:14
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-21 12:48:39
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavInfo, NavItem } from 'src/app/model/nav-style/nav-style.model';

@Component({
  selector: 'app-nav-single-button', 
  templateUrl: './nav-single-button.component.html',
  styleUrls: ['./nav-single-button.component.scss']
})
export class NavSingleButtonComponent implements OnInit {
  nav: HTMLElement;
  main: HTMLElement;
  navList: HTMLElement;
  contentList: NodeListOf<HTMLElement>;
  itemList: NodeListOf<Element>;
  activeBgc: string;
  contentStyle: any;
  @Input('navInfo') navInfo: NavInfo;
  @Input('navItemList') navItemList: Array<NavItem>;
  @Output('navSingleButtonNode') navSingleButtonNode = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    this.nav = document.querySelector('.fc-util-nav');
    this.main = this.nav.querySelector('.nav-main');
    this.navList = document.querySelector('.fc-util-nav .nav-list');
    this.setStyle();
  }

  ngAfterViewInit() {
    this.itemList = this.main.querySelectorAll('.fc-util-nav .nav-list .nav-item');
    let mainHeight = this.navInfo.mainHeight.replace('px', '');
    this.main.style.height = mainHeight + 'px';
    this.contentList = this.main.querySelectorAll('.fc-util-nav .nav-list .nav-item .item-type');
    this.contentList.forEach(element => {
      let leftRightSpacing = this.getNavItemByKey(element.getAttribute('id')) ? this.getNavItemByKey(element.getAttribute('id')).leftRightSpacing : null;
      if (element.classList.contains('item-font')){
        leftRightSpacing = leftRightSpacing ? leftRightSpacing : 32;
        element.style.padding = String((Number(mainHeight) - element.offsetHeight) / 2) + 'px ' + leftRightSpacing + 'px';
      } else  if (element.classList.contains('item-img')){
        leftRightSpacing = leftRightSpacing ? leftRightSpacing : 20;
        let img = element.querySelector('img');
        img.style.padding = String((Number(mainHeight) - 20) / 2 + 1) + 'px ' + leftRightSpacing + 'px ' + String((Number(mainHeight) - 20) / 2 - 1) + 'px';
      } else  if (element.classList.contains('item-img-font') || element.classList.contains('item-font-img')){
        leftRightSpacing = leftRightSpacing ? leftRightSpacing : 20;
        let div = element.querySelector('div');
        div.style.padding = '0px ' + leftRightSpacing + 'px';
      }
    });
  }

  navChangeActive(clickType: string, url: string, itemKey: number) {
    if (this.navInfo.activeKey == itemKey) return;
    this.navInfo.activeKey = itemKey;
    if (clickType == 'open') {
      window.open(url);
    } else if (clickType == 'reload') {
      window.location.href= url;
    } else {
      let backInfo = {
        navType: this.navInfo.navType,
        itemKey:itemKey
      };
      this.navSingleButtonNode.emit(backInfo);
    }
  }

  setStyle() {
    if (this.navInfo.activeBgc) this.activeBgc = this.navInfo.activeBgc;
    if (this.navInfo.navBgc) this.nav.style.backgroundColor = this.navInfo.navBgc;
    if (this.navInfo.mainBgc) this.main.style.backgroundColor = this.navInfo.mainBgc;
    if (this.navInfo.mainWidth && this.navInfo.mainHeight) {
      if (this.navInfo.mainWidth.indexOf('%') != -1) {
        this.main.style.width = this.navInfo.mainWidth;
      } if (/^\d+$/.test(this.navInfo.mainWidth) || this.navInfo.mainWidth.indexOf('px') != -1) {
        this.main.style.width = this.navInfo.mainWidth.replace('px', '') + 'px';
      }
      this.contentStyle = {
        'color': this.navInfo.fontColor ? this.navInfo.fontColor : '#fff',
        'font': '16px/' + (Number(this.navInfo.mainHeight) - 3) + 'px PingFangSC-Regular,HelveticaNeue-Light,\'Helvetica Neue Light\',\'Microsoft YaHei\',sans-serif'
      }
    }
  }

  getNavItemByKey(key: any) {
    return this.navItemList.filter(i => i.itemKey == Number(key))[0] as NavItem;
  }

}
