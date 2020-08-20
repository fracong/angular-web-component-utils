/*
 * @Author: fracong
 * @Date: 2020-08-18 10:36:47
 * @LastEditors: fracong
 * @LastEditTime: 2020-08-20 17:57:59
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  navCssStyle: any;
  navItemList: any;
  rankItemList: any;
  rankInfo: any;
  categoryNavInfo:any;
  categoryNavList: any;

  constructor() { }

  ngOnInit() {
    this.navCssStyle = {
      navBgc: '#3e3d43',
      mainWidth: '1200',
      mainHeight: '50',
      activeBgc: 'red',
      unactiveHoverBgc: 'rgb(78, 79, 80)',
      fontColor: '#fff'
    }
    this.navItemList = [
      {
        itemKey: 1,
        type: 'font',
        title:'111',
        url:'#1',
        isActive: true,
        classList: ['nav-item-one'],
        leftRightSpacing: 32
      },
      {
        itemKey: 2,
        type: 'font',
        title:'222222',
        url:'#2',
        isActive: false,
        classList: ['nav-item-two'],
        leftRightSpacing: 32
      },
      {
        itemKey: 3,
        type: 'font',
        title:'333',
        url:'#3',
        isActive: false,
        classList: ['nav-item-three'],
        leftRightSpacing: 32
      },
      {
        itemKey: 4,
        type: 'img-font',
        title:'444',
        url:'#4',
        imgUrl: 'assets/imags/setting.png',
        imgWidth: '14px',
        isActive: false,
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
        isActive: false,
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
        isActive: false,
        classList: ['nav-item-six'],
        leftRightSpacing: 20
      }
    ];
    this.rankInfo = {
      title:'人气榜单',
      width: '250px',
      langZh: true,
      itemTitleSize:11,
      moreTitle:'更多',
      moreUrl:'#8',
      moreColor:'#3f5a93',
      rightActiveColor: '#ed4259',
      rightList:[
        {
          title:'周',
          type:'week',
          ifActive: true
        },
        {
          title:'月',
          type:'month',
          ifActive: false
        },
        {
          title:'总',
          type:'all',
          ifActive: false
        },
      ],
      rightSplitSymbol:'·'
    };
    this.rankItemList = [
      {
        rankNum:'1',
        title: '12312312312',
        numColor:'#fff',
        numBgc:'#bf2c24',
        langZh: false,
        rightTitle: '13312'
      },
      {
        rankNum:'2',
        title: '我的世界我的世界我的世界',
        numColor:'#fff',
        numBgc:'#e67225',
        langZh: true,
        rightTitle: '12312'
      },
      {
        rankNum:'3',
        title: '我的世界我的世界我的世界',
        numColor:'#fff',
        numBgc:'#e6bf25',
        langZh: true,
        rightTitle: '12312'
      },
      {
        rankNum:'4',
        title: '我的世界我的世界',
        numColor:'#666',
        numBgc:'#ededed',
        langZh: true,
        rightTitle: '12312'
      }
    ]

    this.categoryNavInfo={
      height: '50px',
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
  }
  
  changeItemList(e: any) {
    console.info(e)
  }

  changeCategoryNavList(e: any){
    console.info(e)
  }
}
