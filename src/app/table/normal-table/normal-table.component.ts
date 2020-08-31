/*
 * @Author: fracong
 * @Date: 2020-08-28 17:46:40
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-31 15:49:18
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FieldListItem, TableInfo } from 'src/app/model/table/table.model';

@Component({
  selector: 'app-normal-table',
  templateUrl: './normal-table.component.html',
  styleUrls: ['./normal-table.component.scss']
})
export class NormalTableComponent implements OnInit {
  @Input('tableInfo') tableInfo: TableInfo;
  @Input('tableList') tableList: any;
  @Input('fieldList') fieldList: Array<FieldListItem>;
  @Output('buttonClick') buttonClick = new EventEmitter<any>();
  objectKeys = Object.keys;
  isTrHover: boolean;
  isHover:boolean;
  hoverIndex: number;
  hoverFieldKey: string;
  hoverTypeItemIndex: number;

  constructor() { }

  ngOnInit() {
  }

  isHoverFunc(isHover: boolean, index: number, fieldKey: string, typeItemIndex: number){
    this.isHover = isHover;
    this.hoverIndex = index;
    this.hoverFieldKey = fieldKey;
    this.hoverTypeItemIndex = typeItemIndex;
  }

  isTrHoverFunc(isTrHover: boolean, index: number) {
    this.isTrHover = isTrHover;
    this.hoverIndex = index;
  }

  substringValue(maxLength:number, value: string){
    return maxLength && value.length > maxLength ? value.substring(0, maxLength).concat('…') : value;
  }

  clickButtons(key: string, item: any){
    let backInfo = {
      key: key,
      itemInfo: item
    };
    this.buttonClick.emit(backInfo);
  }

  checkAllBox(){
    let allNum = document.getElementsByName('allNum')[0] as HTMLInputElement;
    let listNum = document.getElementsByName('listNum');
    listNum.forEach(element => {
      let elementInput = element as HTMLInputElement;
      elementInput.checked = allNum.checked ? true : false;
    });
  }

  checkItemBox(){
    let listNum = document.getElementsByName('listNum');
    let flag = true;
    for (let index = 0; index < listNum.length; index++) {
      const element = listNum[index] as HTMLInputElement;
      if(!element.checked) {
        flag = false;
        break;
      }
    }
    let allNum = document.getElementsByName('allNum')[0] as HTMLInputElement;
    allNum.checked = flag ? true : false;
  }

  getCheckedKeyList() {
    let listNum = document.getElementsByName('listNum');
    let returnArray = new Array<any>();
    for (let index = 0; index < listNum.length; index++) {
      const element = listNum[index] as HTMLInputElement;
      if(element.checked) returnArray.push(element.value);
    }
    return returnArray;
  }
}
