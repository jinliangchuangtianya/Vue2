<template>
  <div id="app">
      <view-box>

          <x-header slot="header" :left-options="{showBack : false}">
            <div slot="left">直播</div>
            <div>自定义标题</div>
            <div slot="right">搜索</div>
          </x-header>

        <sc :lock-y="true">
            <div class="tab">
              <tab>
                <tab-item selected>推荐</tab-item>
                <tab-item>新闻</tab-item>
                <tab-item>游戏</tab-item>
                <tab-item>体育</tab-item>
                <tab-item>直播</tab-item>
                <tab-item>互联网</tab-item>
              </tab>
            </div>
        </sc>

        <scroller class="my-scoller"
                  :on-refresh="refresh"
                  refreshText="自定义文字"
                  :on-infinite="infinite"
                  ref="myRef">
          <swiper :list="swiperList" v-model="swiperIndex" :loop="true" :auto="true"></swiper>

          <marquee class="my-marquee">
            <marquee-item v-for='item of marqueeList'>{{ item }}</marquee-item>
          </marquee>
          <panel :list="panelList" type="1"  header="这是头部"></panel>
          <panel :list="moreDataList" type="1" ></panel>


          <!-- <router-view></router-view>-->
        </scroller>

        <tabbar slot="bottom">
            <tabbar-item :selected="true" :show-dot="true" badge="1" link="http://www.baidu.com">
              <img src="./assets/1.jpg" slot="icon" alt="">
              <img src="./assets/2.jpg" slot="icon-active" alt="">
              <span slot="label">首页</span>
            </tabbar-item>
            <tabbar-item>
              <img src="./assets/2.jpg" slot="icon" alt="">
              <span slot="label">推荐</span>
            </tabbar-item>
            <tabbar-item>
              <img src="./assets/3.jpg" slot="icon" alt="">
              <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>

      </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader, Tabbar, TabbarItem, Tab,
  TabItem, Scroller as Sc, Swiper,Marquee, MarqueeItem,
  Panel } from 'vux'
var refreshKey = ['A', 'B01', 'B02', 'B03', 'B04', 'B05', 'B06', 'B07', 'B08','B09', 'B10']
var Key = 0;
var keyValue = 'A';
var start = 0;
var end = 9;
var initLoaded = false;
function getRefreshKey(){
  if(Key > refreshKey.length){
    key = 0
  }
  keyValue = refreshKey[Key];
  Key ++;
  return keyValue;
}
export default {
  name: 'App',
  components : {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Tab,
    TabItem,
    Sc,
    Swiper,
    Marquee,
    MarqueeItem,
    Panel
  },
  created(){
    this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html')
      .then(data => {
        /*
            轮播图数据
           {
              url: 'javascript:',
              img: 'https://static.vux.li/demo/1.jpg',
              title: '送你一朵fua'
            }
         */

         this.swiperList = data.focus.filter(item => {
           return item.addata == null && item.picInfo[0];
         }).map(item => {
              return {
                 url : item.link,
                 img : item.picInfo[0].url,
                 title : item.title
              }
         })

        /*
           首屏新闻列表的数据
          {
              src: 'http://somedomain.somdomain/x.jpg',
              fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
              title: '标题' + (i+1),
              desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
              url: 'http://www.qq.com'
           }
        */
        this.panelList = data.list.filter(item => {
          return item.addata == null && item.picInfo[0];
        }).map(item => {
          return {
            src : item.picInfo[0].url,
            fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
            title : item.title,
            desc : item.digest,
            url : item.link
          }
        })

        /*
          首屏滚动新闻
       */

        this.marqueeList = data.news.filter(item => {
          return item.addata == null;
        }).map(item => {
          return item.digest
        })

        initLoaded = true;
      })
  },
  data(){
    return {
      swiperList :[],
      swiperIndex : 1,
      marqueeList :[],
      panelList : [],
      moreDataList : [],
      footer: {
        title: 'more',
        url: 'http://www.baidu.com'
      },
      listIndex : 0
    }
  },
  methods : {
    refresh(){
      //下拉刷新
       this.$jsonp('http://3g.163.com/touch/jsonp/sy/recommend/0-9.html',{
       miss : '00',
       refresh : getRefreshKey()
     }).then(data => {
        //刷新首屏新闻列表的数据
         this.panelList = data.list.filter(item => {
           return item.addata == null && item.picInfo[0];
         }).map(item => {
           return {
             src : item.picInfo[0].url,
             fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
             title : item.title,
             desc : item.digest,
             url : item.link
           }
         })
       this.moreDataList = [];
       start = 0;
       this.$refs.myRef.finishPullToRefresh();
       this.$vux.toast.text(`当前一共刷新了${this.panelList.length}条数据`, 'top')
     })
    },
    infinite(){
      //上拉加载更多
      if(!initLoaded){
        this.$refs.myRef.finishInfinite();
        return;
      }
      console.log(this.moreDataList)
      this.$jsonp(`http://3g.163.com/touch/jsonp/sy/recommend/${start}-${end}.html`,{
        miss : '00',
        refresh : keyValue
      }).then(data => {
        setTimeout(()=>{
            start += 10;
            let dataList = data.list.filter(item => {
              return item.addata == null && item.picInfo[0];
            }).map(item => {
              return {
                src : item.picInfo[0].url,
                fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
                title : item.title,
                desc : item.digest,
                url : item.link
              }
            })
            this.moreDataList = this.moreDataList.concat(dataList);
            this.$refs.myRef.finishInfinite();
        },3000)
      })
    }
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  #app{
    height: 100%;
  }
  .tab{
    width: 300%;
  }
  .my-scoller{
    top: 90px !important;
  }
  .my-marquee{
    width: 90% !important;
    margin: 5px auto;
    font-size: 14px;
    color: #666;
  }
  .weui-media-box_appmsg .weui-media-box__hd,.weui-media-box__hd img{
    width: 95px !important;
    height: 65px!important;
  }
  .weui-media-box_appmsg .weui-media-box__bd{
    height: 65px !important;
  }
</style>
