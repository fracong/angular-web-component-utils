/*
 * @Author: fracong
 * @Date: 2020-09-03 13:40:49
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-03 14:29:06
 */
export class LabelPageInfo{
    labelPageType: string;
    height: string; // defualt is 30px, must > 25px
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