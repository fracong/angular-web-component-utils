/*
 * @Author: 
 * @Date: 2021-03-31 08:14:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-19 09:13:29
 */
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuItemNameComponent } from './menu-item-name/menu-item-name.component';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  _data: any;
  @Input('data')
  set data(data: any) {
    let dataArray = new Array;
    this._data = this.getChildItemList(dataArray, data, 1, "");
  }
  get data() { 
    return this._data;
  }
  @Input('initItemId') initItemId: string;
  @Input('menuKey') menuKey: string;
  @Input('defultIcon') defultIcon: string;
  @Input('defultIconUrl') defultIconUrl: string;
  selectedId: string;

  constructor() { }

  ngOnInit() {
    this.saveSelectedId();
    this.showSelectedItem();
  }

  saveSelectedId() {
    let storage = window.localStorage;
    if (!this.initItemId) {
      let itemSelectedId = storage.getItem(this.menuKey+'_menu_selected_id');
      if (itemSelectedId) this.selectedId = itemSelectedId;
    } else {
      let itemSelectedId = storage.getItem(this.menuKey+'_menu_selected_id');
      this.selectedId = itemSelectedId ? itemSelectedId : this.initItemId;
      storage.setItem(this.menuKey+'_menu_selected_id', this.selectedId);
    }
  }
  
  showSelectedItem() {
    let selectedItem: any;
    for (let index = 0; index < this._data.length; index++) {
      let item = this._data[index];
      if (this.selectedId && this.selectedId == item.id) {
        selectedItem = item;
      }
    }
    if (!selectedItem) {
      for (let index = 0; index < this._data.length; index++) {
        const item = this._data[index];
        item['showSelected'] = false;
        item['show'] = (item.level == 1) ? true : false;
        item['childShow'] = (item.level == 1) ? false : true;
      }
    } else {
      let allIndex = selectedItem.currentIndex.split('-');
      let selectedLevel = selectedItem.level;

      for (let index = 0; index < this._data.length; index++) {
        const item = this._data[index];
        let currentIndex = item.currentIndex;
        let selectedLevelIndex = "";
        for (let i = 0; i < item.level; i++) {
          const element = allIndex[i];
          selectedLevelIndex += element;
          if (i != (item.level -1)) selectedLevelIndex += '-';
        }
        item['showSelected'] = false;
        if (selectedLevelIndex == currentIndex) {
          item['show'] = true;
          item['showSelected'] = true;
          if (item.hasChild && item.childs) {
            if (item.level < selectedLevel) {
              item['childShow'] = true;
            } else {
              item['childShow'] = false;
            }
          } else {
            item['childShow'] = false;
          }
        } else {
          if (item.level == 1) {
            item['show'] = true;
            item['childShow'] = false;
          } else {
            let selectedParentIndex = selectedLevelIndex.substring(0, selectedLevelIndex.lastIndexOf('-'));
            let currentParentIndex = currentIndex.substring(0, currentIndex.lastIndexOf('-'));
            if (selectedParentIndex == currentParentIndex) {
              item['show'] = true;
            } else {
              item['show'] = false;
            }
            item['childShow'] = false;
          }
        }
      }
    }
  }

  getChildItemList(resultArray: any, dataList: any, level:  number, parentIndex: string) {
    for (let dataIndex = 1; dataIndex < dataList.length+1; dataIndex++) {
      const item = dataList[dataIndex-1];
      item['level'] = level;
      item['index'] = dataIndex;
      let currentIndex = (parentIndex) ? parentIndex + '-' + dataIndex : String(dataIndex);
      item['currentIndex'] = currentIndex;
      resultArray.push(item);
      if (item.hasChild && item.childs) {
        let childLevel = level + 1;
        let list = item.childs as Array<any>;
        resultArray = this.getChildItemList(resultArray, list, childLevel, currentIndex);
      }
    }
    return resultArray;
  }

  upDownFunc(e) {
    if (e.childShow) {
      for (let index = 0; index < this._data.length; index++) {
        let item = this._data[index];
        if (item.currentIndex.startsWith(e.currentIndex)) {
          if (item.currentIndex != e.currentIndex) {
            item.show = false;
          }
          item.childShow = false;
        }
      }
    } else {
      if (e.hasChild) {
        for (let index = 0; index < this._data.length; index++) {
          let item = this._data[index];
          if (item.currentIndex.startsWith(e.currentIndex)) {
            if (item.level == (e.level + 1)) {
              item.show = true;
              item.childShow = false;
            } else  if (item.level == e.level) {
              item.childShow = true;
            }
          }
        }
      } else {
        e.childShow = !e.childShow;
      }
    }
  }

  getAllItemChild(item: any) {
    let list = new Array();
    for (let index = 0; index < this._data.length; index++) {
      let indexItem = this._data[index];
      if (indexItem.currentIndex.startsWith(item.currentIndex)) {
        list.push(indexItem);
      }
    }
  }
}
