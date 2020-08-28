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
    titleRight:TitleRight;
    itemLeftDisplayType: string;// num or font
    itemLeftFontSize: number;
    itemRightDisplay: boolean;
    itemRightFontSize: number;
}

export class TitleRight{
    display: boolean;// defualt is false
    type: string; // nav or img
    navActiveColor: string;
    navActiveType:string;
    navItemList: any;
    navSplitSymbol:string;
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