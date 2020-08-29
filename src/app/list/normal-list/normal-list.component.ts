/*
 * @Author: fracong
 * @Date: 2020-08-28 17:10:19
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-29 20:48:20
 */
import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-normal-list',
  templateUrl: './normal-list.component.html',
  styleUrls: ['./normal-list.component.scss']
})
export class NormalListComponent implements OnInit {
  @Input('tableInfo') tableInfo: any;
  @Input('tableList') tableList: any;
  @Input('fieldList') fieldList: any;

  constructor() { }

  ngOnInit() {
  }

}
