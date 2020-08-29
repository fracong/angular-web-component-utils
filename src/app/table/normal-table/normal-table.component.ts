/*
 * @Author: fracong
 * @Date: 2020-08-28 17:46:40
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-29 20:50:39
 */
import { Component, OnInit, Input } from '@angular/core';
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
}
