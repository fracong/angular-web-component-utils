/*
 * @Author: fracong
 * @Date: 2020-08-18 10:36:47
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-27 17:28:52
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  navInfo: any;
  navItemList: any;
  rankItemList: any;
  rankInfo: any;
  categoryNavInfo:any;
  categoryNavList: any;
  verticalNavInfo:any;
  verticalNavList:any;
  carouselInfo:any;
  carouselItemList: any;

  constructor() { }

  ngOnInit() {
    this.navInfo = {
      navType: 'index',
      navBgc: '#3e3d43',
      mainWidth: '1200',
      mainHeight: '50',
      activeBgc: 'red',
      unactiveHoverBgc: 'rgb(78, 79, 80)',
      fontColor: '#fff',
      activeKey: 1
    }
    this.navItemList = [
      {
        itemKey: 1,
        type: 'font',
        title:'111',
        url:'#1',
        classList: ['nav-item-one'],
        leftRightSpacing: 32
      },
      {
        itemKey: 2,
        type: 'font',
        title:'222222',
        url:'#2',
        classList: ['nav-item-two'],
        leftRightSpacing: 32,
        clickType:'open'
      },
      {
        itemKey: 3,
        type: 'font',
        title:'333',
        url:'#3',
        classList: ['nav-item-three'],
        leftRightSpacing: 32,
        clickType:'reload'
      },
      {
        itemKey: 4,
        type: 'img-font',
        title:'444',
        url:'#4',
        imgUrl: 'assets/imags/setting.png',
        imgWidth: '14px',
        classList: ['nav-item-four'],
        leftRightSpacing: 20
      },
      {
        itemKey: 5,
        type: 'font-img',
        title:'555',
        url:'#5',
        imgUrl: 'assets/imags/setting.png',
        imgWidth: '14px',
        classList: ['nav-item-five'],
        leftRightSpacing: 20
      },
      {
        itemKey: 6,
        type: 'img',
        title:'666',
        url:'#6',
        imgUrl: 'assets/imags/setting.png',
        imgWidth: '14px',
        classList: ['nav-item-six'],
        leftRightSpacing: 20
      }
    ];
    this.rankInfo = {
      title:'人气榜单',
      rankingType:'popularityRanking',
      width: '250px',
      langZh: true,
      itemTitleSize:8,
      moreTitle:'更多',
      moreUrl:'#8',
      moreColor:'#3f5a93',
      titleRight: {
        display: true,
        type: 'nav',
        navActiveColor: '#ed4259',
        navActiveType:'week',
        navItemList: [
          {
            title:'周',
            type:'week',
          },
          {
            title:'月',
            type:'month',
          },
          {
            title:'总',
            type:'all',
          },
        ],
        navSplitSymbol: '·',
      },
      itemLeftDisplayType: 'num',
      itemLeftFontSize: 2,
      itemRightDisplay:true,
      itemRightFontSize: 4
    };
    this.rankItemList = [
      {
        rankNum:'1',
        leftFont:'图集',
        title: '12312312312',
        numColor:'#fff',
        numBgc:'#bf2c24',
        langZh: false,
        rightTitle: '13312',
        rightLangZh:false
      },
      {
        rankNum:'2',
        leftFont:'图文',
        title: '我的世界我的世界我的世界',
        numColor:'#fff',
        numBgc:'#e67225',
        langZh: true,
        rightTitle: '12312',
        rightLangZh:false
      },
      {
        rankNum:'3',
        leftFont:'图片',
        title: '我的世界我的世界我的世界',
        numColor:'#fff',
        numBgc:'#e6bf25',
        langZh: true,
        rightTitle: '12312',
        rightLangZh:false
      },
      {
        rankNum:'4',
        leftFont:'视频',
        title: '我的世界我的世界',
        numColor:'#666',
        numBgc:'#ededed',
        langZh: true,
        rightTitle: '乘风御剑'
      }
    ]

    this.categoryNavInfo={
      navType:'note',
      height: '50px',
      background:'#f7f6f2',
      fontSzie:'12px',
      fontFamily:'\'Microsoft YaHei\',sans-serif',
      activeNum:1,
      activeColor:'#ed4259',
      splitSymbol:'|'
    }

    this.categoryNavList = [
      {
        navKeyNum:1,
        title:'全部',
      },
      {
        navKeyNum:2,
        title:'分类1',
      },
      {
        navKeyNum:3,
        title:'分类2',
      }
    ]

    this.verticalNavInfo={
      navType:'app',
      title:'热门应用排名',
      titleFontSize:'16px',
      width:'250px',
      activeColor: '#ed4259',
      hoverColor:'#a6a6a6',
      activeType:'payRanking',
      itemFontSize:'14px',
      itemMargin:'15px',
    }

    this.verticalNavList=[
      {
        title:'支付榜',
        type:'payRanking'
      },
      {
        title:'视频榜',
        type:'viewRanking'
      }
    ];

    this.carouselInfo={
      // beginAuto: true,
      // beginAutoInterval: 2,
      // beginAutoDirection: false,
      // isDisplayImgButton: true,
      // position: 'right',
      // clickNotStopAuto: false,
      imgButtons:{
        type: 'icon',
        topBtnsTop:'42%',
        topBtnsLeftRightPadding:'6%',
        buttonLeftName: 'Left',
        buttonRightName: 'Right',
        buttonStyle: {
            'font-size': '14px',
            'font-weight': 700,
            width: '50px',
            height: '25px',
        },
        rightIconStyle:{
          'background-image': 'url(/assets/fonts/icons/arrow-ios-right.svg)'
        },
        leftIconStyle:{
          'background-image': 'url(/assets/fonts/icons/arrow-ios-left.svg)'
        },
      },
      carouselWidth:'1000px',
      carouselLeftWidth:'700px',
      topHeight: '233.33px',
      imgArray: {
        // clickType: 'open',
        leftInterval: '12.5%',
        centerWidth: '25%',
        widthInterval: '3%',
        topInterval: '6%',
        animationTime: 0.5,
        animationTimes:100,
      },
      bottomInfo:{
        type:'circle',
        circle: {
          style: {
            width:'9px',
            height: '9px',
            background: '#ddd',
            'margin-top': '11px',
          },
          activeStyle: {
            border:'2px solid #ed4259'
          }
        }
      },
      leftItemInfo: {
        width: '420px',
        bgColor:'#d81d14',
        activegColor: '#961e17',
        actionItemWidth: '100px',
      },
    }
    
    this.carouselItemList = [
      {
        imgUrl: '/assets/imags/carousel_1.png',
        openUrl: '#10',
        title:'我的世界我的世界1',
        introduction:'简介1：我的世界我的世界我的世界我的世界我的世界我的世界我1111111111111111111111世界我的世界',
        actionDisplay: false,
        actionName:'详情1',
      },
      {
        imgUrl: '/assets/imags/carousel_2.png',
        title:'我的世界我的世界2',
        introduction:'简介2：我的世界我的世界我的世界我的世界我的世界我的世界我222222222222世界我的世界',
        actionName:'详情2',
        actionOpenType: 'reload',
        actionOpenUrl:'#20'
      },
      {
        imgUrl: '/assets/imags/carousel_3.png',
        title:'我的世界我的世界3',
        introduction:'简介3：我的世界我的世界我的世界我的世界我的世界我的世界我3333333333333333333世界我的世界',
        actionName:'详情3'
      },
      {
        imgUrl: '/assets/imags/carousel_4.png',
        title:'我的世界我的世界4',
        introduction:'简介4：我的世界我的世界我的世界我的世界我的世界我的世界我444444444444444444444世界我的世界我的',
        actionName:'详情4'
      },
      {
        imgUrl: '/assets/imags/carousel_5.png',
        title:'我的世界我的世界5',
        introduction:'简介5：我的世界我的世界我的世界我的世界我的世界我的世界我555555555555555555555555世界我的世界',
        actionName:'详情5'
      },
      {
        imgUrl: '/assets/imags/carousel_6.png',
        title:'我的世界我的世界6',
        introduction:'简介6：我的世6界我的6世界我66的世界我的世界我的世界我的世界我66666666世界我的世界',
        actionName:'详情6'
      },
      {
        imgUrl: '/assets/imags/carousel_7.png',
        title:'我的世界我的世界7',
        introduction:'简介7：我的世7777界我的世界7我的77世界我的世界我的世777界我的世界我77777世界我的世界',
        actionName:'详情7'
      },
    ];

  }
  changeNavList(e: any) {
    console.info(e)
  }
  
  changeItemList(e: any) {
    console.info(e)
  }

  changeCategoryNavList(e: any){
    console.info(e)
  }
  changeVerticalNavList(e: any){
    console.info(e)
  }
}
