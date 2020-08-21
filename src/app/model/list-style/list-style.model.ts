/*
 * @Author: fracong
 * @Date: 2020-08-20 09:15:31
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-21 15:28:27
 */
export class RankInfo{
    rankingType:string;
    title: string;
    width: string;
    langZh: boolean;
    itemTitleSize: number;
    moreTitle:string;
    moreUrl: string;
    moreColor:string;
    rightActiveColor: string;
    rightActiveType:string;
    rightList: any;
    rightSplitSymbol:string;
    rightFontSize: number;
    leftDisplayType: string;// num or font
    leftFontSize: number;
    itemRightDisplay: boolean;
}

export class ListItem{
    rankNum: string;
    leftFont:string;
    title: string;
    url: string;
    numColor: string;
    numBgc:string;
    langZh:boolean;
}