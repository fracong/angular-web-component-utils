/*
 * @Author: fracong
 * @Date: 2020-09-09 09:41:10
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-12 08:26:26
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

}
