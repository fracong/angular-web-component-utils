/*
 * @Author: fracong
 * @Date: 2020-09-03 10:47:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-22 09:39:49
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LabelPageInfo } from 'src/app/model/label-page/normal-label-page.model';

@Component({
  selector: 'app-normal-label-page',
  templateUrl: './normal-label-page.component.html',
  styleUrls: ['./normal-label-page.component.scss']
})
export class NormalLabelPageComponent implements OnInit {

  @Input('listInfo') listInfo: LabelPageInfo;
  @Output('labelPageNode') labelPageNode = new EventEmitter<any>();
  isHover:boolean;
  remarkKey: number;

  constructor() { }

  ngOnInit() {
    if (this.listInfo.activeItemKey  == undefined) {
      throw new Error("The activeItemKey of the [app-normal-label-page] must be have.");
    }
  }

  changeLabel(key: number) {
    if(this.listInfo.activeItemKey == key) return;
    this.listInfo.activeItemKey = key;
    let backInfo = {
      labelPageType: this.listInfo.labelPageType,
      activeItemKey: key,
    }
    this.labelPageNode.emit(backInfo);
  }

  getTitleHeight(){
    let ifTop = this.listInfo.styleType == undefined || this.listInfo.styleType == 'top';
    let ifBottom = this.listInfo.styleType == 'bottom';
    let a = ifBottom ? '3' : '';
    let b = ifTop ? 1 : Number(a);
    let c = Number(this.listInfo.labelHeight.replace('px','')) - b;
    return this.listInfo.labelHeight ? c +'px' :'';
  }

  getTitleLineHeight() {
    return Number(this.listInfo.labelHeight.replace('px',''))-5+'px';
  }
}
