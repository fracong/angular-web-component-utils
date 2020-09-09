/*
 * @Author: fracong
 * @Date: 2020-09-09 09:41:10
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-09 10:10:24
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag, TagStyle } from 'src/app/model/tag/tag.model';

@Component({
  selector: 'app-tag-minus',
  templateUrl: './tag-minus.component.html',
  styleUrls: ['./tag-minus.component.scss']
})
export class TagMinusComponent implements OnInit {
  @Input('tag') tag: Tag;
  @Input('tagStyle') tagStyle: TagStyle;
  @Output('clickBack') clickBack = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  deleteTag(key: number){
    this.clickBack.emit({key:key});
  }

}
