/*
 * @Author: fracong
 * @Date: 2020-09-02 16:51:15
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-02 17:06:25
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-tip',
  templateUrl: './icon-tip.component.html',
  styleUrls: ['./icon-tip.component.scss']
})
export class IconTipComponent implements OnInit {
  @Input('iconTip') iconTip: any;
  isShowTip: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
