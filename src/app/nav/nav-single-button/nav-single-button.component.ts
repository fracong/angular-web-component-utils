/*
 * @Author: Farton_Fang
 * @Date: 2020-08-18 11:04:14
 * @LastEditors: Farton_Fang
 * @LastEditTime: 2020-08-19 16:01:48
 */
import { Component, OnInit, Input } from '@angular/core';
import { CssStyle, NavItem } from 'src/app/model/nav-style/css-style.model';

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
  @Input('cssStyle') cssStyle: CssStyle;
  @Input('navItemList') navItemList: Array<NavItem>;

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
    let mainHeight = this.cssStyle.mainHeight.replace('px', '');
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

  navChangeActive(itemKey: number) {
    this.navItemList.forEach(element => {
      if (element.itemKey === itemKey) {
        element.isActive = true;
      } else {
        element.isActive = false;
      }
    });
  }

  setStyle() {
    if (this.cssStyle.activeBgc) this.activeBgc = this.cssStyle.activeBgc;
    if (this.cssStyle.navBgc) this.nav.style.backgroundColor = this.cssStyle.navBgc;
    if (this.cssStyle.mainBgc) this.main.style.backgroundColor = this.cssStyle.mainBgc;
    if (this.cssStyle.mainWidth && this.cssStyle.mainHeight) {
      if (this.cssStyle.mainWidth.indexOf('%') != -1) {
        this.main.style.width = this.cssStyle.mainWidth;
      } if (/^\d+$/.test(this.cssStyle.mainWidth) || this.cssStyle.mainWidth.indexOf('px') != -1) {
        this.main.style.width = this.cssStyle.mainWidth.replace('px', '') + 'px';
      }
      this.contentStyle = {
        'color': this.cssStyle.fontColor ? this.cssStyle.fontColor : '#fff',
        'font': '16px/' + (Number(this.cssStyle.mainHeight) - 3) + 'px PingFangSC-Regular,HelveticaNeue-Light,\'Helvetica Neue Light\',\'Microsoft YaHei\',sans-serif'
      }
    }
  }

  getNavItemByKey(key: any) {
    return this.navItemList.filter(i => i.itemKey == Number(key))[0] as NavItem;
  }

}
