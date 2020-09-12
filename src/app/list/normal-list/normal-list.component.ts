/*
 * @Author: fracong
 * @Date: 2020-08-28 17:10:19
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-12 18:48:21
 */
import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { NormalTableComponent } from 'src/app/table/normal-table/normal-table.component';

@Component({
  selector: 'app-normal-list',
  templateUrl: './normal-list.component.html',
  styleUrls: ['./normal-list.component.scss']
})
export class NormalListComponent implements OnInit {
  @ViewChild('normalTable', { static: false }) normalTable: NormalTableComponent;
  @Input('listInfo') listInfo: any;
  @Input('tableList') tableList: any;
  @Input('fieldList') fieldList: any;
  @Input('pagination') pagination: any;
  @Input('currentNum') currentNum: number;
  @Output('tableButtonClick') tableButtonClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clickBackInfo(e: any) {
    this.tableButtonClick.emit(e);
  }

  getCheckedKeyList() {
    return this.normalTable.getCheckedKeyList();
  }

  pageBtnClick(info: any) {
    console.info(info);
  }

}
