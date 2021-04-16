/*
 * @Author: 
 * @Date: 2021-03-31 14:11:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-16 17:02:08
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
  arrowLeft: string;
  iconLeft: string;
  nameLeft: string;
  itemIconUrl: string;
  @Output('upDown') upDown = new EventEmitter<any>();
  @ViewChild('iconTag', { static: false }) iconTag: ElementRef;

  constructor() {
    
  }
  
  ngOnInit() {
    this.arrowLeft = String(9 * (this.item.level - 1))+'px';
    this.iconLeft = String(9 * (this.item.level - 1) + 13)+'px';
    this.nameLeft = String(9 * (this.item.level - 1) + 31)+'px';
  }
  
  ngAfterViewInit() {
    this.changeIconUrl();
  }

  changeIconUrl(){
    if (!this.iconTag) return;
    let iconTagElement = this.iconTag.nativeElement as HTMLElement;
    if (this.item.icon) {
      iconTagElement.style.backgroundImage = 'url(assets/fonts/icons/'+this.item.icon+'.svg)';
    } else {
      if (this.item.iconUrl) {
        iconTagElement.style.backgroundImage = 'url(' + this.item.iconUrl+')';
      }
    }
  }

  upDownFunc(flag: any) {
    this.upDown.emit(flag);
    this.changeIconUrl();
    console.info(123)
  }

  changeUrl(item) {
    if (!item.url) return;
    let storage = window.localStorage;
    storage.setItem(this.menuKey+'_menu_selected_id', item.id);
    window.location = item.url;
  }

}
