/*
 * @Author: 
 * @Date: 2021-03-31 14:11:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-22 09:05:46
 */
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'menu-item-name',
  templateUrl: './menu-item-name.component.html',
  styleUrls: ['./menu-item-name.component.scss']
})
export class MenuItemNameComponent implements OnInit {
  @Input('item') item: any;
  @Input('menuKey') menuKey: string;
  @Input('defultIconUrl') defultIconUrl: string;
  @Input('defultIcon') defultIcon: string;
  arrowLeft: string;
  iconLeft: string;
  nameLeft: string;
  itemIconUrl: string;
  @Output('upDown') upDown = new EventEmitter<any>();

  constructor() {
  }
  
  ngOnInit() {
    this.arrowLeft = String(9 * (this.item.level - 1))+'px';
    this.iconLeft = String(9 * (this.item.level - 1) + 13)+'px';
    this.nameLeft = String(9 * (this.item.level - 1) + 31)+'px';
  }
  
  getIconUrl() {
    if (this.item.icon) {
      return 'url(assets/fonts/icons/'+this.item.icon+'.svg)';
    } else if (this.item.iconUrl) {
      return 'url(' + this.item.iconUrl+')';
    } else if (this.defultIcon) {
      return 'url(assets/fonts/icons/'+this.defultIcon+'.svg)';
    } else if (this.defultIconUrl) {
      return 'url(' + this.defultIconUrl+')';
    }
  }

  upDownFunc() {
    this.upDown.emit(this.item);
  }

  changeUrl() {
    if (!this.item.url) return;
    let storage = window.localStorage;
    storage.setItem(this.menuKey+'_menu_selected_id', this.item.id);
    window.location = this.item.url;
  }
}
