/*
 * @Author: fracong
 * @Date: 2020-08-18 11:43:03
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-31 17:24:03
 */
export class NavInfo{
    navType:string;
    navBgc:string;
    mainBgc:string;
    mainWidth: string;
    mainHeight: string;
    activeBgc: string;
    unactiveHoverBgc: string;
    fontColor: string;
    activeKey:number;
}

export class NavItem{
    itemKey: number;
    type: string;
    title: string;
    url: string;
    clickType: string;
    imgUrl:string;
    imgWidth: string;
    isHover: boolean;
    classList: Array<string>;
    leftRightSpacing: number;
}

export class NavCategoryInfo{
    navType:string;
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
    itemNavType: string; // title or up-down, defualt is title.
}

export class NavVerticalInfo{
    navType: string;
    title: string;
    titleFontSize:string;
    width: string;
    bgColor:string;
    activeColor: string;
    hoverColor:string;
    activeType: string;
    itemFontSize: string;
}

export class NavVerticalItem{
    title: string;
    type: string;
    margin: string;
}