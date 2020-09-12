import { IconArrow } from '../style-comp/icon-arrow.model';

/*
 * @Author: fracong
 * @Date: 2020-09-09 10:07:24
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-11 09:42:46
 */
export class TagFilterInfo{
    selectedTitle: string;
    selectedTitleBgcolor: string; // the value can be empty,  and the value is black, purple, pink, green, gray, yellow, blue, red
    deleteType: string; // type is minus or close, defualt is minus.
    categoryAllTitle: string; // the value can be empty
    width: string;
    tagStyle: TagStyle;
    maxDisplaySize: number;
    switchIconArrow1: IconArrow;
    switchIconArrow2: IconArrow;
}

export class CategoryTag{
    categoryKey: number;
    categoryTitle: string;
    bgcolor: string; // the value is black, purple, pink, green, gray, yellow, blue, red
    isSingle: boolean;
    tagList: Array<Tag>;
}

export class Tag{
    key:  number;
    title: string;
}

export class TagStyle{
    fontSize: string;
    fontWeight: string;
    tagSize: string; // px
}