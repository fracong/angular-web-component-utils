import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Tag, TagStyle, CategoryTag } from 'src/app/model/tag/tag.model';

@Component({
  selector: 'app-nav-tag-filter',
  templateUrl: './nav-tag-filter.component.html',
  styleUrls: ['./nav-tag-filter.component.scss']
})
export class NavTagFilterComponent implements OnInit {
  @Input('selectedKeyList') selectedKeyList: Array<number>;
  selectedTagList: Array<Tag>;
  @Input('categoryTagList') categoryTagList: Array<CategoryTag>;
  @Input('tagStyle') tagStyle: TagStyle;
  @Output('deleteSelectedTagBack') deleteSelectedTagBack = new EventEmitter<any>();
  tagMap = new Map<number, string>();

  constructor() { }

  ngOnInit() {
    if(this.selectedKeyList == undefined) this.selectedKeyList = new Array<number>();
    this.categoryTagList.forEach((element)=>{
      let tagList = element.tagList;
      tagList.forEach((tag)=>{
        this.tagMap.set(tag.key, tag.title);
      });
    });
    this.reloadSelectTagList();
  }

  deleteSelectedTag(tag: Tag) {
    this.selectedKeyList.splice(this.selectedKeyList.indexOf(tag.key), 1);
    this.reloadSelectTagList();
    this.deleteSelectedTagBack.emit(this.selectedKeyList);
  }

  clickTag(key: number) {
    if(this.selectedKeyList.includes(key)) {
      this.selectedKeyList.splice(this.selectedKeyList.indexOf(key), 1);
    } else {
      this.selectedKeyList.push(key);
    }
    this.reloadSelectTagList();
    this.deleteSelectedTagBack.emit(this.selectedKeyList);
  }

  reloadSelectTagList() {
    let newSelectedTagList = new Array<Tag>();
    this.selectedKeyList.forEach(element => {
      let tag = new Tag();
      tag.key = element;
      tag.title = this.tagMap.get(element);
      newSelectedTagList.push(tag);
    });
    this.selectedTagList = newSelectedTagList;
  }
}
