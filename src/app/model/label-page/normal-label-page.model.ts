/*
 * @Author: fracong
 * @Date: 2020-09-03 13:40:49
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-04 12:34:04
 */
export class LabelPageInfo{
    labelPageType: string;
    styleType: string; // top or bottom, defualt is top.
    labelHeight: string; // defualt is 30px, must > 25px
    activeItemKey: number;
    activeColor: string; // defualt is #ed4259
    fontSize: string; // defualt is 12px
    labelList: Array<LabelPageItem>;
}

export class LabelPageItem{
    key: number;
    title: string;
    width: string;// px
}