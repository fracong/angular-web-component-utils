/*
 * @Author: fracong
 * @Date: 2020-08-18 10:36:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-14 17:09:01
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NormalListComponent } from '../list/normal-list/normal-list.component';
import { Dialog } from '../model/dialog/dialog.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild('normalList', { static: false }) normalList: NormalListComponent;
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
  normalListInfo: any;
  normalTableList: any;
  normalFieldList: any;
  normalListPagination: any;
  paginationCurrentNum: number;
  labelListInfo: any;
  navTagFilterInfo: any;
  selectedKeyList:any;
  categoryTagList: any;
  isDialogDisplay: boolean;
  dialog = new  Dialog();
  dialogTitle: string;

  showLeft: boolean = true;
  leftFlex = 1;
  rightFlex = 5;
  menuKey = 'util';
  menuData: any;

  constructor() { }

  ngOnInit() {
    this.initLeftRightFlex();

    this.menuData = [
      {
        "id":'0',
        "name":"首页1",
        "url":"/",
        "icon":"",
        "hasChild":false
      },
      {
        "id": '1',
        "name":"用户管理2",
        "icon":"",
        "hasChild": true,
        "childs":[
          {
            "id": '8',
            "name":"用户管理2-1",
            "icon":"",
            "hasChild": true,
            "childs":[
              {
                "id": '9',
                "url":"/",
                "name":"用户管理2-1-1",
                "icon":"",
                "hasChild": false,
              }
            ]
          },
          {
            "id": '3',
            "url":"/",
            "name":"用户管理2-2",
            "icon":"",
            "hasChild": true,
            "childs":[
              {
                "id": '5',
                "url":"/",
                "name":"用户管理2-2-1",
                "icon":"",
                "hasChild": false,
              }
            ]
          },
          {
            "id": '4',
            "url":"/",
            "name":"用户管理2-3",
            "icon":"",
            "hasChild": false,
          },
          {
            "id": '6',
            "name":"用户管理2-4",
            "icon":"",
            "hasChild": true,
            "childs":[
              {
                "id": '7',
                "url":"/",
                "name":"用户管理2-4-1",
                "icon":"",
                "hasChild": false,
              }
            ]
          },
        ]
      },
      {
        "id": '2',
        "name":"用户管理3",
        "url":"/",
        "icon":"",
        "hasChild": false,
      }
    ];
    
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
      itemLeftDisplayType: 'font',
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
      navType: 'note',
      height: '50px',
      background:'#f7f6f2',
      fontSzie:'12px',
      fontFamily:'\'Microsoft YaHei\',sans-serif',
      activeNum: 6,
      activeColor:'#ed4259',
      splitSymbol:'|',
      // isShowRight: true,
      rightIconActiveKey:'2',
      rightInfoList: [
        {
          type: 'title-icon',
          key: 0,
          title:'222<a style="color:red;">&nbsp;&nbsp;&lt;html代码&gt;&nbsp;&nbsp;</a>22',
          position: 'left',
          iconInfo: {
            iconUrl: 'assets/fonts/icons/question.svg',
            iconTip: '我的世界我的世界1',
            tipStyle:{
              width:'140px',
              left: '-65px',
            },
            tipPosition:'top',
          }
        },
        {
          type: 'title-icon',
          key: 1,
          title:'1111111',
          // position: 'right',
          iconInfo:{
            iconUrl: 'assets/fonts/icons/question.svg',
            iconTip: '我的世界我的世界2,我的世界我的世界2',
            tipPosition:'bottom',
          }
        },
        {
          type: 'icon',
          key: 2,
          iconUrl: 'assets/fonts/icons/menu-blocky.svg',
          activeUrl:'assets/fonts/icons/menu-blocky-active.svg',
        },
        {
          type: 'icon',
          key: 3,
          iconUrl: 'assets/fonts/icons/menu-list.svg',
          activeUrl:'assets/fonts/icons/menu-list-active.svg',
        }
      ],
    }

    this.categoryNavList = [
      {
        navKeyNum:1,
        title:'全部',
        itemNavType: 'title',
      },
      {
        navKeyNum:2,
        title:'分类1',
      },
      {
        navKeyNum:3,
        title:'分类2',
      },
      {
        navKeyNum:4,
        title:'人数排行',
        itemNavType: 'up-down',
        imgUrl: '/assets/fonts/icons/arrow-left.svg',
      },
      {
        navKeyNum: 5,
        title:'数量排行',
        itemNavType: 'up-down',
        imgUrl: '/assets/fonts/icons/arrow-left.svg',
      },
      {
        navKeyNum: 6,
        title:'总分类1',
        itemNavType: 'drop-down',
        dropDownActiveKey: 1,
        dropDownActiveTitle: '我的世界1',
        dropDownItemKeys:[
          {
            key: 1,
            title: '我的世界1'
          },
          {
            key: 2,
            title: '我的世界2'
          },
        ],
      },
      {
        navKeyNum:7,
        title:'分类3',
      },
      {
        navKeyNum: 8,
        title:'总分类2',
        itemNavType: 'drop-down',
        // dropDownActiveKey: 1,
        dropDownActiveTitle: '我的世界3',
        dropDownItemKeys:[
          {
            key: 1,
            title: '我的世界3'
          },
          {
            key: 2,
            title: '我的世界4'
          },
        ],
      },
      {
        navKeyNum:9,
        title:'分类4',
      },
      {
        navKeyNum: 10,
        title:'总分类3',
        itemNavType: 'drop-down',
        // dropDownActiveKey: 1,
        dropDownActiveTitle: '我的世界3',
        dropDownItemKeys:[
          {
            key: 1,
            title: '我的世界3'
          },
          {
            key: 2,
            title: '我的世界4'
          },
        ],
      },
      {
        navKeyNum:11,
        title:'分类4',
      },
    ];

    this.verticalNavInfo={
      navType:'appVerticalNav',
      title:'热门应用排名',
      titleFontSize:'16px',
      width:'250px',
      activeColor: '#ed4259',
      hoverColor:'#a6a6a6',
      activeKey:1,
      itemFontSize:'14px',
      itemMargin:'15px',
    }

    this.verticalNavList=[
      {
        title:'支付榜',
        key: 1
      },
      {
        title:'视频榜',
        key: 2
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

    this.normalListInfo={
      topClass:['padding-left-10'],
      tableInfo:{
        isShowTableBorder: true,
        isShowHoverTr: true,
        hoverTrColor: '#f7f6f2',
        tagBgcolorList:['#ea5d5d', '#5491e6', '#54cea4'],
        itemKey:'id',
        // isHideCheckBox: true,
        checkBoxWidth: '2%',
      }
    }

    this.normalFieldList=[
      {
        name:'类型',
        type:'typeList',
        listType:'aLabel',
        aColor: '#666',
        aHoverColor: 'red',
        splitSymbol:'·',
        key: 'type',
        width:'6%',
        class:['font-color-gray', 'font-size-14', 'margin-left-8', 'font-family-arial']
      },
      {
        name:'名称',
        type:'aLabel',
        aColor: '#262626',
        aHoverColor: 'blue',
        key: 'name',
        width:'5%',
      },
      {
        name:'简介',
        type:'aLabel',
        maxLength: 15,
        aColor: '#666',
        aHoverColor: '#262626',
        key: 'int',
        width:'15%',
        class:['font-color-gray', 'font-size-14', 'a-color-gray']
      },
      {
        name:'大小',
        key: 'size',
        width:'5%',
        class:['font-color-gray', 'font-size-12']
      },
      {
        name:'所属人',
        type:'html',
        key: 'author',
        aColor: '#666',
        aHoverColor: '#262626',
        width:'5%',
        class:['font-color-gray', 'font-size-12']
      },
      {
        name: '标签',
        type: 'tagList',
        key: 'status',
        bgColor: 'blue',
        width:'10%',
        tagColor: '#fff',
        tagBgColorList:[0, 1, 2],
      },
      {
        name:'时间',
        key: 'time',
        width:'5%',
        class:['font-color-gray', 'font-size-12']
      },
      {
        name:'操作',
        type: 'button',
        key: 'operating',
        width:'5%',
        thClass: ['font-right'],
        class: ['font-right'],
        buttonList: [
          {
            name: '编辑',
            key: 'edit',
            color: '#fff',
            bgColor:'#ffc107',
          },
          {
            name: '删除',
            key: 'delete',
            color: '#fff',
            bgColor:'#007bff',
          }
        ],
      }
    ];

    this.normalListPagination = {
      type: 'center',
      // infoDisplay: true,
      // numBtnDisplay: true,
      goDisplay:true,
      centerInfoType: 'left',
      preBtnName: '上一页',
      nextBtnName: '下一页',
      limit: 10,
      totalNum: 310,
      displayNum: 10,
    }

    this.paginationCurrentNum = 10;

    this.normalTableList = [
      {
        id: 1,
        type: [
          {
            value:'视频',
            url: '#333'
          },
          {
            value:'直播',
            url: '#331'
          },
        ],
        name:{
          value:'我的世界',
          url:'#31',
        },
        int: {
          value:'1我的世界我的世界，我的世界我的世界，我的世界我的世界',
          url: '#341'
        },
        size: '101M',
        author: '<a class="test-a">fracong1<style>.test-a {color: #666 !important; } .test-a:hover{color: red !important;}</style></a>',
        time: '2020-07-13',
        status: ['新闻', '娱乐', '体育'],
      },
      {
        id: 2,
        type: [
          {
          value:'音频',
          url: '#332'
          }
        ],
        name: {
          value:'我的世界2',
          url: '#32'
        },
        int: {
          value:'2我的世界我的世界，我的世界我的世界，我的世界我的世界',
          url: '#342'
        },
        size: '102M',
        author: 'fracong2',
        time: '2020-07-13',
      },
      {
        id: 3,
        type: [
          {
          value:'图文',
          url: '#333'
          }
        ],
        name: {
          value:'我的世界3',
          url: '#33'
        },
        int: {
          value:'3我的世界我的世界，我的世界我的世界，我的世界我的世界',
          url: '#343'
        },
        size: '103M',
        author: 'fracong3',
        time: '2020-07-13',
      },
      {
        id: 4,
        type: [
          {
            value:'图集',
            url: '#334'
            }
        ],
        name: {
          value:'我的世界4',
          url: '#34'
        },
        int: {
          value:'4我的世界我的世界，我的世界我的世界，我的世界我的世界',
          url: '#344'
        },
        size: '104M',
        author: 'fracong5',
        time: '2020-07-13',
      }
    ];

    this.labelListInfo = {
      labelPageType: 'normal',
      // styleType: 'bottom',
      activeItemKey: 2,
      labelHeight:'30px',
      activeColor: '#ed4259',
      fontSize: '14px',
      labelList: [
        {
          key: 1,
          title: '11111111',
          width: '80px',
        },
        {
          key: 2,
          title: '2222222',
          width: '80px',
        },
        {
          key: 3,
          title: '33333333',
          width: '80px',
        },
        {
          key: 4,
          title: '444444',
          width: '80px',
        },
        {
          key: 5,
          title: '55555555555',
          width: '90px',
        }
      ],
    };

    this.navTagFilterInfo = {
      selectedTitle:'已选',
      selectedTitleBgcolor: 'red',
      // deleteType: 'close',
      categoryAllTitle: '全部',
      width:'600px',
      tagStyle: {
        fontSize: '12px',
        fontWeight:'600',
        tagSize: '22px'
      },
      maxDisplaySize: 4,
      switchIconArrow1: {
        title: '展开',
        color: 'blue',
        type: 'down'
      },
      switchIconArrow2: {
        title: '收起',
        color: 'blue',
        type: 'up'
      }
    }
    this.selectedKeyList = [1,2,7];

    this.categoryTagList=[
      {
        categoryKey:1,
        categoryTitle: '视频',
        bgcolor: 'red',
        tagList: [
          {
            key: 1,
            title: '娱乐'
          },
          {
            key: 2,
            title: '体育'
          },
          {
            key: 3,
            title: '新闻'
          },
          {
            key: 8,
            title: '记录'
          },
          {
            key: 9,
            title: '财经'
          },
        ]
      },
      {
        categoryKey: 2,
        categoryTitle: '图片',
        bgcolor: 'yellow',
        isSingle: true,
        tagList: [
          {
            key: 4,
            title: '电影'
          },
          {
            key: 5,
            title: '音乐'
          },
          {
            key: 6,
            title: '广告'
          },
          {
            key: 7,
            title: '小说'
          },
          {
            key: 10,
            title: '农业'
          },
        ]
      }
    ];
    this.dialog.ifDisplayBtn = true;
    this.dialog.width = '350px';
    this.dialog.saveTitle = 'comp-util.dialog.confirm-btn';
    this.dialog.footerBgcolor = '#dcdada';
    this.dialogTitle = "提示";
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

  clickBackInfo(e: any){
    console.info(e);
  }

  getNormalListCheckedKeyList(){
    console.info(this.normalList.getCheckedKeyList());
  }

  labelPageBack(e: any){
    console.info(e);
  }

  deleteSelectedTagBack(e: any){
    console.info(e);
  }

  openDialog(){
    this.isDialogDisplay = true;
  }

  closeDialog(){
    this.isDialogDisplay = false;
  }

  initLeftRightFlex() {
    let storage = window.localStorage;
    let left_flex = storage.getItem(this.menuKey+'_left_flex');
    if (left_flex){
      this.leftFlex = Number(left_flex);
    }
    let right_flex = storage.getItem(this.menuKey+'_right_flex');
    if (right_flex){
      this.rightFlex = Number(right_flex);
    }
    let show_left = storage.getItem(this.menuKey+'_show_left');
    if (show_left) {
      this.showLeft =( show_left == 'true') ? true : false;
    }
    if (this.showLeft == undefined) {
      this.showLeft = true;
    }
  }
  
  changeShow(){
    this.showLeft = !this.showLeft;
    let storage = window.localStorage;
    storage.setItem(this.menuKey+'_show_left', String(this.showLeft));
  }

  afterMove(e: any) {
    this.leftFlex = e.leftFlex;
    this.rightFlex = e.rightFlex;
    let storage = window.localStorage;
    storage.setItem(this.menuKey+'_left_flex', String(this.leftFlex));
    storage.setItem(this.menuKey+'_right_flex', String(this.rightFlex));
  }
}
