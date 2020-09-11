/*
 * @Author: fracong
 * @Date: 2020-09-04 15:58:08
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-11 13:59:20
 */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Tag, TagStyle, CategoryTag, TagFilterInfo } from 'src/app/model/tag/tag.model';
import { IconArrow } from 'src/app/model/style-comp/icon-arrow.model';

@Component({
  selector: 'app-nav-tag-filter',
  templateUrl: './nav-tag-filter.component.html',
  styleUrls: ['./nav-tag-filter.component.scss']
})
export class NavTagFilterComponent implements OnInit {
  @Input('tagFilterInfo')  tagFilterInfo: TagFilterInfo;
  @Input('selectedKeyList') selectedKeyList: Array<number>;
  @Input('categoryTagList') categoryTagList: Array<CategoryTag>;
  @Output('deleteSelectedTagBack') deleteSelectedTagBack = new EventEmitter<any>();
  selectedTagList: Array<Tag>;
  tagMap = new Map<number, string>();
  tagBgcolorMap = new Map<number, string>();
  isShowBtnHover: boolean = false;
  isHideBtnHover: boolean = false;
  iconMap: Map<number, IconArrow> =  new Map<number, IconArrow>();
  iconStatusMap: Map<number, boolean> =  new Map<number, boolean>();// if the value is true, the icon is switchIconArrow1, and the value is false, the icon is switchIconArrow2.
  tagCategoryMap: Map<number, number> =  new Map<number, number>();
  categorySelectedTagCountMap: Map<number, number> =  new Map<number, number>();

  constructor() { }

  ngOnInit() {
    if(this.selectedKeyList == undefined) this.selectedKeyList = new Array<number>();
    if(!this.tagFilterInfo.selectedTitle) throw new Error('The selectedTitle can not be empty.');
    if(this.checkAllCategorySingleTag()) throw new Error('The single category must be single selected.');
    this.initData();
    this.reloadSelectedTagList();
  }
  
  initData() {
    this.categoryTagList.forEach((element)=>{
      let tagList = element.tagList;
      let flag = true;
      for (let index = 0; index < tagList.length; index++) {
        const tag = tagList[index];
        if(this.tagMap.has(tag.key)) throw new Error('Duplicate key['+tag.key+'] in tag!');
        this.tagMap.set(tag.key, tag.title);
        this.tagBgcolorMap.set(tag.key, element.bgcolor);
        this.tagCategoryMap.set(tag.key, element.categoryKey);
        if (flag && (index+1) > this.tagFilterInfo.maxDisplaySize && this.selectedKeyList.includes(tag.key)) {
          flag = false;
        }
      }
      this.iconStatusMap.set(element.categoryKey, flag);
      if(flag) {
        this.iconMap.set(element.categoryKey, this.tagFilterInfo.switchIconArrow1 as IconArrow);
      } else {
        this.iconMap.set(element.categoryKey, this.tagFilterInfo.switchIconArrow2 as IconArrow);
      }
    });
  }

  deleteSelectedTag(tag: Tag) {
    this.selectedKeyList.splice(this.selectedKeyList.indexOf(tag.key), 1);
    this.updatePageAndBackInfo();
  }

  clickTag(categoryKey: number, isSingle: boolean, tagKey: number) {
    if (isSingle) {
      let category = this.getCategoryByKey(categoryKey);
      let selectedKey: number;
      if (this.checkSingleCategoryIfSelected(category)) {
        category.tagList.forEach((element)=>{
          if (this.selectedKeyList.includes(element.key)) {
            this.selectedKeyList.splice(this.selectedKeyList.indexOf(element.key), 1);
            selectedKey = element.key;
            return;
          }
        });
      }
      if ((selectedKey != undefined && selectedKey != tagKey) || selectedKey == undefined) {
        this.selectedKeyList.push(tagKey);
      }
    } else {
      if(this.selectedKeyList.includes(tagKey)) {
        this.selectedKeyList.splice(this.selectedKeyList.indexOf(tagKey), 1);
      } else {
        this.selectedKeyList.push(tagKey);
      }
    }
    this.updatePageAndBackInfo();
  }

  clickAllTag(categoryKey: number) {
    if (!this.categorySelectedTagCountMap.get(categoryKey)) return;
    let category = this.getCategoryByKey(categoryKey);
    category.tagList.forEach((element)=>{
      if(this.selectedKeyList.includes(element.key)){
        this.selectedKeyList.splice(this.selectedKeyList.indexOf(element.key), 1);
      }
    });
    this.updatePageAndBackInfo();
  }

  reloadSelectedTagList() {
    let newTagList = new Array<Tag>();
    let map =  new Map<number, number>();
    this.selectedKeyList.forEach(element => {
      let tag = new Tag();
      tag.key = element;
      tag.title = this.tagMap.get(element);
      newTagList.push(tag);
      // count the selected tag of category
      let categoryKey  = this.tagCategoryMap.get(element);
      let count = this.categorySelectedTagCountMap.get(categoryKey) > 0 ? this.categorySelectedTagCountMap.get(categoryKey) + 1 : 1;
      map.set(categoryKey, count);
    });
    this.selectedTagList = newTagList;
    this.categorySelectedTagCountMap = map;
  }

  backInfo(){
    let backList = new Array<number>();
    this.selectedKeyList.forEach(element => {
      backList.push(element);
    });
    this.deleteSelectedTagBack.emit(backList.sort((a,b)=>a-b));
  }

  updatePageAndBackInfo(){
    this.reloadSelectedTagList();
    this.backInfo();
  }

  clickShowHide(categoryKey: number){
    let status = this.iconStatusMap.get(categoryKey);
    if (status) {
      this.iconStatusMap.set(categoryKey, false);
      this.iconMap.set(categoryKey, this.tagFilterInfo.switchIconArrow2 as IconArrow);
    } else {
      this.iconStatusMap.set(categoryKey, true);
      this.iconMap.set(categoryKey, this.tagFilterInfo.switchIconArrow1 as IconArrow);
    }
  }

  checkAllCategorySingleTag() {
    let flag = false;
    for (let index = 0; index < this.categoryTagList.length; index++) {
      const element = this.categoryTagList[index];
      if(!element.isSingle) continue;
      let tagList = element.tagList;
      let num = 0;
      tagList.forEach((tag)=>{
        if (this.selectedKeyList.includes(tag.key)) {
          if(num >= 1) {
            flag = true;
            return;
          }
          num++;
        }
      });
      if(flag) break;
    }
    return flag;
  }

  checkSingleCategoryIfSelected(categoryTag: CategoryTag) {
    if (categoryTag == null) return false;
    let tagList = categoryTag.tagList;
    let flag = false;
    tagList.forEach((tag)=>{
      if (this.selectedKeyList.includes(tag.key)) {
        flag = true;
        return;
      }
    });
    if (flag) return true;
    return false;
  }

  getCategoryByKey(categoryKey: number){
    let categoryTagList =  this.categoryTagList.filter((element)=>{
      return  element.categoryKey == categoryKey;
    });
    if (categoryTagList.length > 0) return categoryTagList[0];
    return null;
  }
}
