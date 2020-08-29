/*
 * @Author: fracong
 * @Date: 2020-08-29 20:36:43
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-29 20:41:53
 */
export class TableInfo{
    isShowTableBorder: boolean;
}

export class FieldListItem{
    name: string;
    type: string;
    listType: string;
    aColor:  string;
    aHoverColor:  string;
    splitSymbol: string;
    key:  string;
    width: string;
    class:Array<string>;
}