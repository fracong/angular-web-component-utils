/*
 * @Author: fracong
 * @Date: 2020-08-25 15:19:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-22 09:23:09
 */
export class CarouselInfo{
    beginAuto: boolean; // true is auto, false is unauto
    beginAutoDirection:boolean; // true is right, false is left
    beginAutoInterval: number; //unit second, defualt is 3s.
    clickNotStopAuto:boolean; // if click button, when true, the auto will not stop; when false, the auto will stop. and defualt is true.
    isDisplayImgButton: boolean; // true is display, false is undispalay, and defualt is display.
    position: string;
    imgButtons: ImgButton;
    carouselWidth: string;
    carouselLeftWidth: string;
    topHeight: string;
    imgArray: CarouselImg;
    bottomInfo: BottomInfo;
    leftItemInfo: LeftItemInfo;
}

export class ImgButton{
    type: string; // button or icon
    topBtnsTop: string;
    topBtnsLeftRightPadding: string;
    buttonStyle: {};
    leftButtonName: string;
    rightButtonName: string;
    rightIconStyle: {};
    leftIconStyle: {};
    buttonLeftName: string;
    buttonRightName: string;
}

export class CarouselImg{
    leftInterval: string;// Only supports percentage
    centerWidth: string;// Only supports percentage
    widthInterval: string;// Only supports percentage
    topInterval: string; // Only supports percentage
    clickType: string;// type is open and move, defualt is move.
    animationTime: number; //move time
    animationTimes: number; // move times in animationTime, defualt 100 times.
}

export class BottomInfo{
    type: string; // circle or other
    circle: BottomCircle;
}

export class BottomCircle{
    style: any;
    activeStyle: any;
}

export class LeftItemInfo{
    width: string;
    bgColor:string;
    activegColor: string;
    actionItemWidth: string;
}

export class CarouselItem{
    imgUrl: string;
    openUrl: string;
    title: string;
    introduction: string;
    actionDisplay: boolean;// true is display, false is undisplay, defualt is display
    actionName: string;
    actionOpenType: string; // open or reload, defualt is open
}