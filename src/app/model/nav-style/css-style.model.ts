/*
 * @Author: Farton_Fang
 * @Date: 2020-08-18 11:43:03
 * @LastEditors: Farton_Fang
 * @LastEditTime: 2020-08-19 15:21:39
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