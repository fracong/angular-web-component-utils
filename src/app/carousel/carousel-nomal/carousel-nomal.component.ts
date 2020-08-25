/*
 * @Author: fracong
 * @Date: 2020-08-21 16:26:40
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-25 17:21:45
 */
import { Component, OnInit, Input } from '@angular/core';
import { CarouselItem, CarouselInfo } from 'src/app/model/carousel/carousel.model';

@Component({
  selector: 'app-carousel-nomal',
  templateUrl: './carousel-nomal.component.html',
  styleUrls: ['./carousel-nomal.component.scss']
})
export class CarouselNomalComponent implements OnInit {
  ItemIndexArray: Array<number> = new Array<number>();
  itemHtmlArray: Array<HTMLElement> = new Array<HTMLElement>();
  leftBtnItem: HTMLElement;
  rightBtnItem: HTMLElement;
  animationTime: number = 0.5;
  animationTimes: number = 100;
  btnDisabled:boolean = false;
  itemsLeft: Array<string> = new Array<string>();
  itemsTop: Array<string> = new Array<string>();
  itemsWidth: Array<string> = new Array<string>();
  itemsZIndex: Array<number> = new Array<number>();
  maxZIndex: number;
  @Input('carouselItemList') carouselItemList: Array<CarouselItem>;
  @Input('carouselInfo') carouselInfo: CarouselInfo;
  constructor() { }

  ngOnInit() {
    this.leftBtnItem = document.querySelector('.fc-util-carousel .carousel-top .carousel-top-left');
    this.leftBtnItem.style.top = '42%';
    this.leftBtnItem.style.left = '1%';
    this.rightBtnItem = document.querySelector('.fc-util-carousel .carousel-top .carousel-top-right');
    this.rightBtnItem.style.top = '42%';
    this.rightBtnItem.style.right = '1%';
    if(this.carouselItemList.length%2 == 0) throw new Error("The length of the carouselItemList must be odd number.");
    
    this.maxZIndex = this.getMaxZIndex();
    for (let index = 1; index <= this.carouselItemList.length; index++) {
      let intervalNum = (index <= this.maxZIndex) ? this.maxZIndex - index : index - this.maxZIndex;

      let zIndex = (index <= this.maxZIndex) ? index : (this.maxZIndex - (index - this.maxZIndex));
      this.itemsZIndex.push(zIndex);
      let widthNumber = this.toNumber(this.carouselInfo.centerWidth) - this.toNumber(this.carouselInfo.widthInterval) * intervalNum;
      let width = String(widthNumber).concat('%');
      this.itemsWidth.push(width);
      let top = String(this.toNumber(this.carouselInfo.topInterval) * intervalNum).concat('%');
      this.itemsTop.push(top);
      
      let left: string;
      if (index <= this.maxZIndex) {
        left = String(this.toNumber(this.carouselInfo.leftInterval)*(index -1)).concat('%');
      } else {
        left = String(100 - (this.toNumber(this.carouselInfo.leftInterval)*(this.carouselItemList.length-index) + widthNumber)).concat('%');
      }
      this.itemsLeft.push(left);
    }
  }

  ngAfterViewInit() {
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
  }

  moveRightOneItem(){
    if(this.btnDisabled) return;
    this.btnDisabled = true;
    this.moveRightItems();
    setTimeout(()=>{
      this.btnDisabled = false;
    }, this.animationTime*1000);
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
      
      let oneX  = (left1 -left2)/this.animationTimes;
      let oneW = (this.toNumber(this.itemsWidth[source])-this.toNumber(this.itemsWidth[dest]))/this.animationTimes;
      for (let times = 1; times <= this.animationTimes; times++) {
        let x = left1 - oneX * times;
        let y = this.getHeight(x,left1,left2,height1,height2);
        let w = this.toNumber(this.itemsWidth[source]) - oneW*times;
        setTimeout(() => {
          this.itemHtmlArray[itemIndex].style.left = String(x).replace('-','').concat('%');
          this.itemHtmlArray[itemIndex].style.top = String(y).replace('-','').concat('%');
          this.itemHtmlArray[itemIndex].style.width = String(w).replace('-','').concat('%');
          if(index == 0) {
            this.itemHtmlArray[itemIndex].style.opacity = String((1/this.animationTimes) * times);
          } else if(index == this.carouselItemList.length-2){
            this.itemHtmlArray[itemIndex].style.opacity = String(1-((1/this.animationTimes) * times));
          }
        }, (this.animationTime*1000/this.animationTimes) * times);
      }
      this.itemHtmlArray[itemIndex].style.zIndex = String(this.itemsZIndex[dest]);
    }
    
  }

  moveLeftOneItem(){
    if(this.btnDisabled) return;
    this.btnDisabled = true;
    this.moveLeftItems();
    setTimeout(()=>{
      this.btnDisabled = false;
    }, this.animationTime*1000);
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
      
      let oneX  = (left1 -left2)/this.animationTimes;
      let oneW = (this.toNumber(this.itemsWidth[source])-this.toNumber(this.itemsWidth[dest]))/this.animationTimes;
      for (let times = 1; times <= this.animationTimes; times++) {
        let x = left1 - oneX * times;
        let y = this.getHeight(x,left1,left2,height1,height2);
        let w = this.toNumber(this.itemsWidth[source]) - oneW*times;
        setTimeout(() => {
          this.itemHtmlArray[itemIndex].style.left = String(x).replace('-','').concat('%');
          this.itemHtmlArray[itemIndex].style.top = String(y).replace('-','').concat('%');
          this.itemHtmlArray[itemIndex].style.width = String(w).replace('-','').concat('%');
          if(index == 1) {
            this.itemHtmlArray[itemIndex].style.opacity = String(1-((1/this.animationTimes) * times));
          } else if(index == (this.carouselItemList.length-1)){
            this.itemHtmlArray[itemIndex].style.opacity = String((1/this.animationTimes) * times);
          }
        }, (this.animationTime*1000/this.animationTimes) * times);
      }
      this.itemHtmlArray[itemIndex].style.zIndex = String(this.itemsZIndex[dest]);
    }
  }

  clickImg(imgIndex: number, imgUrl: string) {
    if(this.carouselInfo.clickType == 'open') {
      window.open(imgUrl);
    } else {
      let item = document.querySelector('.fc-util-carousel .carousel-top a.item'+(imgIndex)) as HTMLElement;
      let zIndex = Number(item.style.zIndex);
      this.skipItems(zIndex, imgIndex);
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
      }, this.animationTime*1000*index);
    }
    setTimeout(()=>{
      this.btnDisabled = false;
    }, this.animationTime*1000*num);
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
