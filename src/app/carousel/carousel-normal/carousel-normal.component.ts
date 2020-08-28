/*
 * @Author: fracong
 * @Date: 2020-08-21 16:26:40
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-27 17:47:14
 */
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CarouselItem, CarouselInfo } from 'src/app/model/carousel/carousel.model';
import { CarouselNormalInfoComponent } from './carousel-nomal-info/carousel-normal-info.component';

@Component({
  selector: 'app-carousel-normal',
  templateUrl: './carousel-normal.component.html',
  styleUrls: ['./carousel-normal.component.scss']
})
export class CarouselNormalComponent implements OnInit {
  @ViewChild('carouselInfoLeft', { static: false }) carouselInfoLeft: CarouselNormalInfoComponent;
  @ViewChild('carouselInfoRight', { static: false }) carouselInfoRight: CarouselNormalInfoComponent;
  ItemIndexArray: Array<number> = new Array<number>();
  itemHtmlArray: Array<HTMLElement> = new Array<HTMLElement>();
  leftBtnItem: HTMLElement;
  rightBtnItem: HTMLElement;
  btnDisabled:boolean = false;
  itemsLeft: Array<string> = new Array<string>();
  itemsTop: Array<string> = new Array<string>();
  itemsWidth: Array<string> = new Array<string>();
  itemsZIndex: Array<number> = new Array<number>();
  maxZIndex: number;
  @Input('carouselItemList') carouselItemList: Array<CarouselItem>;
  @Input('carouselInfo') carouselInfo: CarouselInfo;
  beginAutoTimer: any;
  activeBtnHove: boolean;
  constructor() { }

  ngOnInit() {
    if(this.carouselItemList.length%2 == 0) throw new Error("The length of the carouselItemList must be odd number.");
    this.carouselInfo.imgArray.animationTimes = (this.carouselInfo.imgArray.animationTimes) ? this.carouselInfo.imgArray.animationTimes : 100;
    this.maxZIndex = this.getMaxZIndex();
    if(this.carouselInfo.clickNotStopAuto == undefined) this.carouselInfo.clickNotStopAuto = true;
    
    // add item style into array
    for (let index = 1; index <= this.carouselItemList.length; index++) {
      let intervalNum = (index <= this.maxZIndex) ? this.maxZIndex - index : index - this.maxZIndex;

      let zIndex = (index <= this.maxZIndex) ? index : (this.maxZIndex - (index - this.maxZIndex));
      this.itemsZIndex.push(zIndex);
      let widthNumber = this.toNumber(this.carouselInfo.imgArray.centerWidth) - this.toNumber(this.carouselInfo.imgArray.widthInterval) * intervalNum;
      let width = String(widthNumber).concat('%');
      this.itemsWidth.push(width);
      let top = String(this.toNumber(this.carouselInfo.imgArray.topInterval) * intervalNum).concat('%');
      this.itemsTop.push(top);
      
      let left: string;
      if (index <= this.maxZIndex) {
        left = String(this.toNumber(this.carouselInfo.imgArray.leftInterval)*(index -1)).concat('%');
      } else {
        left = String(100 - (this.toNumber(this.carouselInfo.imgArray.leftInterval)*(this.carouselItemList.length-index) + widthNumber)).concat('%');
      }
      this.itemsLeft.push(left);
    }
  }

  ngAfterViewInit() {
    if (this.carouselInfo.isDisplayImgButton == undefined || this.carouselInfo.isDisplayImgButton) this.initButton();
    for (let index = 1; index <= this.carouselItemList.length; index++) {
      this.ItemIndexArray.push(index);
      let item = document.querySelector('.fc-util-carousel .carousel-top a.item'+(index)) as HTMLElement;
      this.itemHtmlArray.push(item);
      
      item.style.left = this.itemsLeft[index-1];
      item.style.top = this.itemsTop[index-1];
      item.style.width = this.itemsWidth[index-1];
      item.style.zIndex = String(this.itemsZIndex[index-1]);
      if(index == 1 || index == this.carouselItemList.length) {
        item.style.opacity = '0';
      }
    }
    this.changeBottomStyleAndRightInfo(this.ItemIndexArray[this.maxZIndex-1]);
    
    let bottom = document.querySelector('.fc-util-carousel .carousel-bottom') as HTMLElement;
    if(this.carouselInfo.bottomInfo.type == 'circle' && this.carouselInfo.bottomInfo.circle.style.width){
      bottom.style.width = this.carouselItemList.length * (7+Number(this.carouselInfo.bottomInfo.circle.style.width.replace('px', '')))+4+ 'px';
    }

    if (this.carouselInfo.beginAuto == undefined || this.carouselInfo.beginAuto) {
      this.beginAutoTimer = setInterval(() => {
        if (this.carouselInfo.beginAuto == undefined || this.carouselInfo.beginAuto) {
          if (this.carouselInfo.beginAutoDirection == undefined || this.carouselInfo.beginAutoDirection) {
            this.moveRightOneStep(true);
          } else {
            this.moveLeftOneStep(true);
          }
        } else {
          clearInterval(this.beginAutoTimer);
        }
      }, 1000 * (this.carouselInfo.beginAutoInterval ? this.carouselInfo.beginAutoInterval : 2));
    }
  }

  initButton() {
    this.leftBtnItem = document.querySelector('.fc-util-carousel .carousel-top .carousel-top-left');
    this.leftBtnItem.style.top = this.carouselInfo.imgButtons.topBtnsTop;
    this.leftBtnItem.style.left = this.carouselInfo.imgButtons.topBtnsLeftRightPadding;
    this.rightBtnItem = document.querySelector('.fc-util-carousel .carousel-top .carousel-top-right');
    this.rightBtnItem.style.top = this.carouselInfo.imgButtons.topBtnsTop;
    this.rightBtnItem.style.right = this.carouselInfo.imgButtons.topBtnsLeftRightPadding;
    let topBtns = document.querySelectorAll('.fc-util-carousel .carousel-top .top-btn');
    topBtns.forEach((element)=>{
      let elementHtml = element as HTMLElement;
      elementHtml.style.zIndex = String(this.maxZIndex+1);
    });
  }

  moveRightOneStep(ifAuto:boolean){
    if(!ifAuto && !this.carouselInfo.clickNotStopAuto) this.carouselInfo.beginAuto = false;
    if(this.btnDisabled) return;
    this.btnDisabled = true;
    this.moveRightItems();
    setTimeout(()=>{
      this.btnDisabled = false;
    }, this.carouselInfo.imgArray.animationTime*1000);
  }

  moveRightItems() {
    this.ItemIndexArray = this.changEnd2Frist(this.ItemIndexArray);
    for (let index = 0; index < this.carouselItemList.length; index++) {
      let source = index;
      let dest  = (index ==  (this.carouselItemList.length-1)) ? 0 : index+1;
      let itemIndex = this.ItemIndexArray[dest] -1;

      if(index == 0) {
        this.itemHtmlArray[itemIndex].style.opacity == '0';
      } else if(index == this.carouselItemList.length-2) {
        this.itemHtmlArray[itemIndex].style.opacity == '1';
      }
      
      let left1 = this.toNumber(this.itemsLeft[source]);
      let height1 = -this.toNumber(this.itemsTop[source]);
      let left2 = this.toNumber(this.itemsLeft[dest]);
      let height2 = -this.toNumber(this.itemsTop[dest]);
      
      let oneX  = (left1 -left2)/this.carouselInfo.imgArray.animationTimes;
      let oneW = (this.toNumber(this.itemsWidth[source])-this.toNumber(this.itemsWidth[dest]))/this.carouselInfo.imgArray.animationTimes;
      for (let times = 1; times <= this.carouselInfo.imgArray.animationTimes; times++) {
        let x = left1 - oneX * times;
        let y = this.getHeight(x,left1,left2,height1,height2);
        let w = this.toNumber(this.itemsWidth[source]) - oneW*times;
        setTimeout(() => {
          this.itemHtmlArray[itemIndex].style.left = String(x).replace('-','').concat('%');
          this.itemHtmlArray[itemIndex].style.top = String(y).replace('-','').concat('%');
          this.itemHtmlArray[itemIndex].style.width = String(w).replace('-','').concat('%');
          if(index == 0) {
            this.itemHtmlArray[itemIndex].style.opacity = String((1/this.carouselInfo.imgArray.animationTimes) * times);
          } else if(index == this.carouselItemList.length-2){
            this.itemHtmlArray[itemIndex].style.opacity = String(1-((1/this.carouselInfo.imgArray.animationTimes) * times));
          }
        }, (this.carouselInfo.imgArray.animationTime*1000/this.carouselInfo.imgArray.animationTimes) * times);
      }
      this.itemHtmlArray[itemIndex].style.zIndex = String(this.itemsZIndex[dest]);
    }
    this.changeBottomStyleAndRightInfo(this.ItemIndexArray[this.maxZIndex-1]);
  }

  moveLeftOneStep(ifAuto: boolean){
    if(!ifAuto && !this.carouselInfo.clickNotStopAuto) this.carouselInfo.beginAuto = false;
    if(this.btnDisabled) return;
    this.btnDisabled = true;
    this.moveLeftItems();
    setTimeout(()=>{
      this.btnDisabled = false;
    }, this.carouselInfo.imgArray.animationTime*1000);
  }

  moveLeftItems() {
    this.ItemIndexArray = this.changFrist2End(this.ItemIndexArray);
    for (let index = 1; index <= this.carouselItemList.length; index++) {
      let source  = (index == this.carouselItemList.length) ? 0 : index;
      let dest = index-1;
      let itemIndex = this.ItemIndexArray[dest] -1;
      if(index == 1) {
        this.itemHtmlArray[itemIndex].style.opacity == '1';
      } else if(index == (this.carouselItemList.length-1)) {
        this.itemHtmlArray[itemIndex].style.opacity == '0';
      }
      
      let left1 = this.toNumber(this.itemsLeft[source]);
      let height1 = -this.toNumber(this.itemsTop[source]);
  
      let left2 = this.toNumber(this.itemsLeft[dest]);
      let height2 = -this.toNumber(this.itemsTop[dest]);
      
      let oneX  = (left1 -left2)/this.carouselInfo.imgArray.animationTimes;
      let oneW = (this.toNumber(this.itemsWidth[source])-this.toNumber(this.itemsWidth[dest]))/this.carouselInfo.imgArray.animationTimes;
      for (let times = 1; times <= this.carouselInfo.imgArray.animationTimes; times++) {
        let x = left1 - oneX * times;
        let y = this.getHeight(x,left1,left2,height1,height2);
        let w = this.toNumber(this.itemsWidth[source]) - oneW*times;
        setTimeout(() => {
          this.itemHtmlArray[itemIndex].style.left = String(x).replace('-','').concat('%');
          this.itemHtmlArray[itemIndex].style.top = String(y).replace('-','').concat('%');
          this.itemHtmlArray[itemIndex].style.width = String(w).replace('-','').concat('%');
          if(index == 1) {
            this.itemHtmlArray[itemIndex].style.opacity = String(1-((1/this.carouselInfo.imgArray.animationTimes) * times));
          } else if(index == (this.carouselItemList.length-1)){
            this.itemHtmlArray[itemIndex].style.opacity = String((1/this.carouselInfo.imgArray.animationTimes) * times);
          }
        }, (this.carouselInfo.imgArray.animationTime*1000/this.carouselInfo.imgArray.animationTimes) * times);
      }
      this.itemHtmlArray[itemIndex].style.zIndex = String(this.itemsZIndex[dest]);
    }
    this.changeBottomStyleAndRightInfo(this.ItemIndexArray[this.maxZIndex-1]);
  }

  clickImg(flag: boolean, imgIndex: number, imgUrl: string) {
    if((this.carouselInfo.beginAuto == undefined || this.carouselInfo.beginAuto) 
      && !this.carouselInfo.clickNotStopAuto) {
      this.carouselInfo.beginAuto = false;
    }
    let item = document.querySelector('.fc-util-carousel .carousel-top a.item'+(imgIndex)) as HTMLElement;
    let zIndex = Number(item.style.zIndex);
    if(!(flag || zIndex != 1) || zIndex == this.maxZIndex) return;
    if(this.carouselInfo.imgArray.clickType == 'open') {
      window.open(imgUrl);
    } else {
      this.skipItems(zIndex, imgIndex);
    }
  }
  
  changeBottomStyleAndRightInfo(imgIndex: number) {
    let bottoms = document.querySelectorAll('.fc-util-carousel .carousel-bottom .bottom-list.circle .bottom');
    bottoms.forEach((element)=>{
      let htmlElement = element as HTMLElement;
      if (htmlElement.classList.contains('circle'+imgIndex)){
        htmlElement.style.border = this.carouselInfo.bottomInfo.circle.activeStyle.border;
        htmlElement.style.marginTop = Number(this.carouselInfo.bottomInfo.circle.style['margin-top'].replace('px','')) -2+'px';
        htmlElement.style.removeProperty('background');
      } else {
        htmlElement.style.removeProperty('border');
        htmlElement.style.marginTop = this.carouselInfo.bottomInfo.circle.style['margin-top'];
        htmlElement.style.background = this.carouselInfo.bottomInfo.circle.style.background;
      }
    });

    if(this.carouselInfo.position == 'right'){
      this.carouselInfoLeft.changeInfo(imgIndex);
    } else {
      this.carouselInfoRight.changeInfo(imgIndex);
    }
  }

  skipItems(zIndex: number, imgIndex: number){
    let num = (this.maxZIndex > zIndex) ? this.maxZIndex - zIndex : zIndex - this.maxZIndex;
    if(this.btnDisabled) return;
    this.btnDisabled = true;
    let ItemIndex = this.ItemIndexArray.indexOf(imgIndex);
    for (let index = 0; index < num; index++) {
      setTimeout(()=>{
        if(this.maxZIndex > ItemIndex) {
          this.moveRightItems();
        } else {
          this.moveLeftItems();
        }
      }, this.carouselInfo.imgArray.animationTime*1000*index);
    }
    setTimeout(()=>{
      this.btnDisabled = false;
    }, this.carouselInfo.imgArray.animationTime*1000*num);
  }

  getMaxZIndex() {
    return (this.carouselItemList.length+1)/2;
  }

  changEnd2Frist(array: Array<any>) {
    let end = array[array.length-1];
    for (let index = array.length-1; index > 0; index--) {
      array[index] = array[index-1];
    }
    array[0]  = end;
    return array;
  }

  changFrist2End(array: Array<any>) {
    let frist = array[0];
    for (let index = 1; index < array.length; index++) {
      array[index-1] = array[index];
    }
    array[array.length-1]  = frist;
    return array;
  }

  getHeight(x: number, left1: number,left2: number,height1: number,height2: number){
    let y = height2+ ((x-left2)*(height1-height2))/(left1-left2);
    return y;
  }

  toNumber(percent:string){
    let str=percent.replace("%","");
    return Number(str);
  }
}
