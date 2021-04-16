/*
 * @Author: 
 * @Date: 2021-03-31 14:11:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-09 09:35:37
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'menu-item-name',
  templateUrl: './menu-item-name.component.html',
  styleUrls: ['./menu-item-name.component.scss']
})
export class MenuItemNameComponent implements OnInit {
  @Input('item') item: any;
  @Input('menuKey') menuKey: string;
  arrowLeft: string;
  nameLeft: string;
  @Output('upDown') upDown = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.arrowLeft = String(9 * (this.item.level - 1))+'px';
    this.nameLeft = String(9 * (this.item.level - 1) + 10)+'px'; 
  }

  upDownFunc(flag: any) {
    this.upDown.emit(flag);
  }

  changeUrl(item) {
    let storage = window.localStorage;
    storage.setItem(this.menuKey+'_menu_selected_id', item.id);
    window.location = item.url;
  }

}
