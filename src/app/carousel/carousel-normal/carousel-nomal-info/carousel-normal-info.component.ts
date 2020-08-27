/*
 * @Author: fracong
 * @Date: 2020-08-27 16:35:55
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-27 17:44:32
 */
import { Component, OnInit, Input } from '@angular/core';
import { CarouselItem, CarouselInfo } from 'src/app/model/carousel/carousel.model';

@Component({
  selector: 'app-carousel-normal-info',
  templateUrl: './carousel-normal-info.component.html',
  styleUrls: ['./carousel-normal-info.component.scss']
})
export class CarouselNormalInfoComponent implements OnInit {
  @Input('carouselItemList') carouselItemList: Array<CarouselItem>;
  @Input('carouselInfo') carouselInfo: CarouselInfo;
  activeBtnHove: boolean;

  constructor() { }

  ngOnInit() {
  }

  changeInfo(imgIndex: number){
    let infoItems = document.querySelectorAll('.carousel-info .item-info');
    infoItems.forEach((element)=>{
      let htmlElement = element as HTMLElement;
      if (htmlElement.classList.contains('item-info-'+imgIndex)){
        htmlElement.style.removeProperty('display');
      } else {
        htmlElement.style.display = 'none';
      }
    });
  }

  openItemUrl(type: string,url: string) {
    if ('reload' == type) {
      window.location.href= url;
    } else {
      window.open(url);
    }
  }

}
