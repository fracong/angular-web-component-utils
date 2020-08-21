/*
 * @Author: fracong
 * @Date: 2020-08-18 11:43:03
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-20 17:44:14
 */
export class CssStyle{
    navBgc:string;
    mainBgc:string;
    mainWidth: string;
    mainHeight: string;
    activeBgc: string;
    unactiveHoverBgc: string;
    fontColor: string;
}

export class NavItem{
    itemKey: number;
    type: string;
    title: string;
    url: string;
    imgUrl:string;
    imgWidth: string;
    isActive: boolean;
    isHover: boolean;
    classList: Array<string>;
    leftRightSpacing: number;
}

export class NavCategoryInfo{
    height: string;
    background:string;
    fontSzie:string;
    fontFamily:string;
    activeNum: number;
    activeColor: string;
    splitSymbol: string;
}

export class NavCategoryItem{
    navKeyNum: number;
    title: string;
}