/*
 * @Author: fracong
 * @Date: 2020-09-09 09:41:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-22 09:42:33
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag, TagStyle } from 'src/app/model/tag/tag.model';

@Component({
  selector: 'app-tag-annular',
  templateUrl: './tag-annular.component.html',
  styleUrls: ['./tag-annular.component.scss']
})
export class TagAnnularComponent implements OnInit {
  @Input('tag') tag: Tag;
  @Input('tagStyle') tagStyle: TagStyle;
  @Input('bgcolor') bgcolor: string;
  @Input('deleteType') deleteType: string;
  @Output('clickBack') clickBack = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  deleteTag(key: number){
    this.clickBack.emit({key:key});
  }

  getTagTitleLineHeight() {
    return this.tagStyle.tagSize ? (Number(this.tagStyle.tagSize.replace('px','')) - 4 + 'px' ): '';
  }

}
