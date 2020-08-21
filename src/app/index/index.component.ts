/*
 * @Author: fracong
 * @Date: 2020-08-18 10:36:47
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-21 15:52:14
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
      rightActiveColor: '#ed4259',
      rightActiveType:'week',
      rightList:[
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
      rightSplitSymbol:'·',
      leftDisplayType: 'num',
      leftFontSize: 2,
      itemRightDisplay:true,
      rightFontSize: 4
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
    ]
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
