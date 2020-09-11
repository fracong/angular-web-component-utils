/*
 * @Author: fracong
 * @Date: 2020-09-10 10:56:36
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-11 09:16:17
 */
import { Component, OnInit, Input } from '@angular/core';
import { IconArrow } from 'src/app/model/style-comp/icon-arrow.model';

@Component({
  selector: 'app-icon-arrow',
  templateUrl: './icon-arrow.component.html',
  styleUrls: ['./icon-arrow.component.scss']
})
export class IconArrowComponent implements OnInit {
  @Input('icon') icon: IconArrow;
  isHover: boolean = false;

  constructor() { }

  ngOnInit() {
    if(this.icon == undefined) this.icon = new IconArrow();
  }

}
