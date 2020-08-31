/*
 * @Author: fracong
 * @Date: 2020-08-28 17:10:19
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-31 11:20:22
 */
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-normal-list',
  templateUrl: './normal-list.component.html',
  styleUrls: ['./normal-list.component.scss']
})
export class NormalListComponent implements OnInit {
  @Input('listInfo') listInfo: any;
  @Input('tableList') tableList: any;
  @Input('fieldList') fieldList: any;
  @Output('tableButtonClick') tableButtonClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clickBackInfo(e: any) {
    this.tableButtonClick.emit(e);
  }

}
