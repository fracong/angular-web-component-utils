/*
 * @Author: fracong
 * @Date: 2020-08-29 20:36:43
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-31 14:28:38
 */
export class TableInfo{
    isShowTableBorder: boolean;
    isShowHoverTr: boolean;
    hoverTrColor: string;
    tagBgcolorList: Array<string>;
    itemKey: string;
    isHideCheckBox: boolean;
    checkBoxWidth: string;
}

export class FieldListItem{
    name: string;
    type: string;
    maxLength: number;
    listType: string;
    aColor:  string;
    aHoverColor:  string;
    splitSymbol: string;
    key:  string;
    width: string;
    class:Array<string>;
    tagColor: string;
    tagBgColorList: Array<number>; // index form TableInfo.tagBgcolorList
    buttonList: ButtonItem;
}

export class ButtonItem{
    name: string;
    key: string;
    color: string;
    bgColor: string;
    fontSize: string;
}