/*
 * @Author: fracong
 * @Date: 2020-09-09 10:07:24
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-09 15:20:28
 */
export class CategoryTag{
    categoryTitle: string;
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
    color:string;
    bgcolor: string;
    svgBgcolor: string;
}