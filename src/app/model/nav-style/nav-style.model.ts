/*
 * @Author: fracong
 * @Date: 2020-08-18 11:43:03
 * @LastEditors: fracong
 * @LastEditTime: 2020-09-02 17:58:22
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
    rightIconActiveKey: number;
    rightInfoList: any;
}

export class RightItem{
    type: string;
    key: number;
    title: string;
    position: string;// left or right, defualt is right.
    iconInfo: IconInfo;
}

export class IconInfo{
    iconUrl:string;
    iconTip: string;
    tipStyle: any;
    tipPosition: string; //top or bottom, defualt is top.
}

export class NavCategoryItem{
    navKeyNum: number;
    title: string;
    itemNavType: string; // title or up-down, defualt is title.
    imgUrl: string;
    dropDownActiveKey: number;// 0 is parent Category, and other item begin 1, and the key is only.
    dropDownActiveTitle: string;
    dropDownItemKeys: Array<NavDropDownItem>;
}

export class NavDropDownItem{
    key: number;
    title: string;
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