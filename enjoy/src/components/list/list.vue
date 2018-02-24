<template>
  <div class="list">
      <header class="header">
          <span class="go_back" @click="goBack()"></span>
          <h1>{{this.title}}</h1>
      </header>
      <div class="aside">
          <span class="aside_left" @click="showMore($event)">{{this.title}}</span>
          <span class="aside_mid" @click="showMoreTwo($event)" v-text="showMiddle"></span>
          <span class="right">筛选</span>
      </div>
      <div class="sort_all" v-show="sort_show">
          <span class="arrow_mid"></span>
        <router-link :to="'/list/' + item.id" v-for="(item, index) in sort" v-text="item.title" :key="index"></router-link>
      </div>
      <div class="classify" v-show="scroll_show">
        <p class="all_part"><span>全部品类</span><i class="arrow_top"></i></p>
        <div class="first_part">
            <h2><span>快餐小吃</span></h2>
            <div>
                <p v-for="(item, index) in firstPart">
                    <router-link :to="'/list/' + item.id" v-text="item.title" class="" :key="index"></router-link>
                </p>
            </div>
        </div>
        <div class="second_part">
            <h2><span>各地风味</span></h2>
            <div>
                <p v-for="(item, index) in secondPart">
                    <router-link :to="'/list/' + item.id" v-text="item.title" class="" :key="index"></router-link>
                </p>
            </div>
        </div>
        <div class="third_part">
            <h2><span>果蔬超市</span></h2>
            <div>
                <p v-for="(item, index) in thirdPart">
                    <router-link :to="'/list/' + item.id" v-text="item.title" class="" :key="index"></router-link>
                </p>
            </div>
        </div>
        <div class="fourth_part">
            <h2><span>甜品饮品</span></h2>
            <div>
                <p v-for="(item, index) in fourthPart">
                    <router-link :to="'/list/' + item.id" v-text="item.title" class="" :key="index"></router-link>
                </p>
            </div>
        </div>
    </div>
     <div class="home_list">
        <ul>
            <li v-for="item in ITEM">
                <router-link :to="'/buy/' +item.title">
                    <img :src="'../../../static/' + item.img" alt="" class="list_img">
                </router-link>
                <div class="content">
                    <span class="brand" v-if="item.brand">{{item.brand}}</span>
                <span class="new" v-if="item.new">{{item.new}}</span>
                <h2>{{item.title}}</h2>
                <p class="list_top">
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="text_left">{{'月售' + item.sales}}</span>
                    <span class="distance">{{item.distance}}</span>
                    <span class="time">{{item.time}}</span>
                </p>
                <p class="money">
                    <span class="price">{{'起送价 ¥ ' + item.price}}</span>
                    <span class="dispatch">{{'配送费 ¥ ' + item.dispatch}}</span>
                    <span class="special" v-if="item.special">{{item.special}}</span>
                    <span class="activity" v-if="item.activity">{{item.activity}}</span>
                </p>
                <p class="ling" v-if="item.ling">
                    <img src="../../../static/small/ling.jpg" alt="">
                    <span>{{item.ling}}</span>
                </p>
                <p class="back" v-if="item.back">
                    <img src="../../../static/small/fan.jpg" alt="">
                    <span>{{item.back}}</span>
                </p>
                <p class="ticket" v-if="item.ticket">
                    <img src="../../../static/small/ticket.jpg" alt="">
                    <span>{{item.ticket}}</span>
                </p>
                </div>
            </li>
        </ul>
    </div>
    <div class="go_top" @click="goTop()" v-show="cricle">
        <span></span>
    </div>
    
      <router-view></router-view>
  </div>
</template>
<style lang="less" scoped>
.position(@top: 12px) {
    position: absolute;
    top: @top;
}
.overflow() {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.borderTop(@w: 1px) {
    border-top: @w solid #efefef;
}
.borderBottom(@w: 1px) {
    border-bottom: @w solid #efefef;
}
.list {
    .sort_all {
        .arrow_mid {
            position: absolute;
            left: 184px;
            top: 86px;
            width: 10px;
            height: 10px;
            background: #FFF;
            border-top: 1px solid #eee;
            border-left: 1px solid #eee;
            transform: rotate(45deg);
            z-index: 2;
        }
        a {
            display: block;
            text-align: left;
            padding: 10px 0;
            border-bottom: 1px solid #efefef;
            line-height: 20px;
            padding-left: 15px;
            font-size: 13px;
            &.router-link-active {
                color: orange
            }
        }
    }
    .classify {
        height: 300px;
        // 出现滚动条
        overflow:scroll;
        // 隐藏滚动条
        &::-webkit-scrollbar {
            display: none;
        }
        .all_part {
            width:100%;
            background:#efefef;
            text-align: left;
            padding:6px 0;
            box-sizing:border-box;
            margin-bottom: 20px;
            span {
                font-size: 10px;
                height:12px;
                display: inline-block;
                border-left: 2px solid orange;
                padding-left:15px;
            }
            .arrow_top {
                position: absolute;
                top:86px;
                left:53px;
                width:10px;
                height: 10px;
                background: #efefef;
                transform: rotate(45deg);
            }
        } 
       .first_part,
       .second_part,
       .third_part,
       .fourth_part {
           h2 {
               background: #efefef;
               text-align: left;
               font-size: 12px;
               font-weight: normal;
               padding: 6px 0;
               span {
                   display: inline-block;
                   padding-left:15px;
                   border-left: 2px solid orange;
               }
           }
           div {
               width:100%;
               padding:10px;
               box-sizing:border-box;
               overflow: hidden;
               p {
                   width:33.333333%;
                   float: left;
                   box-sizing:border-box;
                   padding:5px;
                   a {
                        display: inline-block;
                        width:100%;
                        height: 30px;
                        line-height: 30px;
                        font-size: 14px;
                        border: 1px solid #eee;
                    &.router-link-active {
                        border-color: orange;
                        color:orange;
                        }
                   }
               }
           }
       } 
    }
    .go_top {
        width:40px;
        height: 40px;
        // background:orange;
        border: 1px solid #666;
        position: fixed;
        bottom: 10px;
        right: 10px;
        border-radius: 50%;
        &:after {
            content: '';
            display: inline-block;
            width:20px;
            height: 10px;
            border-top:1px solid #666;
            position: absolute;
            top:10px;
            left:10px;
        }
        &:before {
            content: '';
            display: inline-block;
            width:15px;
            height: 15px;
            border-top: 1px solid #666;
            border-right: 1px solid #666;
            position: absolute;
            top: 13px;
            left: 12px;
            transform: rotate(-45deg)
        }
        span {
            display: block;
            width:20px;
            height:20px;
            border-bottom:1px solid #666;
            transform: rotate(90deg);
            position: absolute;
            top: 11px;
            left: 20px;
        }
    }
    .header {
        height: 50px;
        text-align: center;
        padding:0 10px;
        box-sizing: border-box;
        line-height: 50px;
        position: relative;
        .go_back {
            display: block;
            width: 12px;
            height: 12px;
            border:1px solid transparent;
            border-left-color:#333;
            border-top-color:#333;
            transform: rotate(-45deg);
            .position(17px);
            left:20px;
        }
        h1 {
            font-size: 20px;
        }
    }
    .aside {
        .borderTop();
        .borderBottom(); 
        height: 20px;
        line-height: 20px; 
        padding:10px 0;
        span {
            display: inline-block;
            border-right:1px solid #eee;
            width:30%;
            font-size: 14px; 
            &::after {
                content: '';
                display: inline-block;
                width:6px;
                height:6px;
                border-left: 1px solid #333;
                border-bottom: 1px solid #333;
                transform: rotate(-45deg);
                margin-left:3px;
            }
        }
        span.back {
            &::after {
                animation: Back 1s linear 0s 1 alternate forwards;
            }
        }
        span.focus {
            &::after {
                animation: rotate 1s linear 0s 1 alternate forwards;
            }
        }
@keyframes rotate {
    from {
        transform: rotate(-45deg);
    }
    to {
        transform: rotate(135deg);
    }
}
@keyframes Back {
    from {
        transform: rotate(135deg);
    }
    to {
        transform: rotate(-45deg);
    }
}
        .right {
            border-right:none;
            &::after {
                content: '';
                display: inline-block;
                width:0px;
                height: 0px;
                border: none;
            }
        } 
    }
    .home_list {
        padding-top:5px;
        .list_title {
            color: #333;
            line-height: 20px;
            padding-bottom: 5px;
        }
        li {
            position: relative;
            width:100%;
            padding:10px;
            box-sizing: border-box;
            border-bottom: 1px solid #efefef;
            .content {
                margin-left:71px;
            }
            .brand {
                .position(10px);
                left:10px;
                background: #ffa627;
                color: #fff;
                padding: 0 5px;
            }
            .list_img {
                width: 23%;
                font-size: 0;
                float: left;
                margin-right:5px;
                border: 1px solid #efefef;
            }
            h2 {
                color: #333;
                text-align: left;
                font-weight: normal;
                line-height: 30px;
                font-size: 15px;
            }
            .list_top {
                height:20px;
                line-height: 20px;
                text-align: right;
                font-size: 12px;
                .star {
                    background: url('../../../static/small/star.png') no-repeat;
                    background-size: cover;
                    width: 10px;
                    height: 10px;
                    float: left;
                    margin-right: 4px;
                    background-position: 0 0;
                }
                .text_left {
                    display: inline-block;
                    float: left;
                }
                .distance {
                    float: right;
                    padding-left:5px;
                    &:before {
                        content: '';
                        border-left: 1px solid #ccc;
                        margin-right:5px;
                    }
                }
            }
            .money {
                text-align: left;
                left: 25px;
                .special {
                    display: inline-block;
                    padding: 0 5px;
                    color: #333;
                    background:#ffd161;
                    border-bottom-right-radius: 7px;
                    border-top-left-radius: 7px;
                    float: right;
                }
            }
            .back {
                text-align: left;
                span {
                    .overflow();
                    display: inline-block;
                    width:140px;
                }
               img {
                    width:12px;
                    font-size: 12px;
               }
            }
            .ticket {
                text-align: left;
                span {
                    .overflow();
                    display: inline-block;
                    width:140px;
                }
                img {
                    width:12px;
                }
            }
            .ling {
                text-align: left;
                span {
                    .overflow();
                    display: inline-block;
                    width:140px;
                }
                img {
                    width:12px;
                }
            }
            .new {
                .position();
                right:10px;
                background: #ffa627;
                color: #fff;
                padding: 0 5px;
            }
        }
    }
}
</style>
<script>
export default {
    data() {
        return{
            ITEM: [],
            scroll_show: false,
            cricle: false,
            num: 0,
            firstPart:[],
            secondPart: [ { "title": "全部", "id": 20 },
                         { "title": "地方菜", "id": 21},
                         { "title": "香锅/烤鱼", "id": 22 },
                         { "title": "川湘菜","id": 23},
                         { "title": "东北菜", "id": 24 },
                         { "title": "北京菜", "id": 25},
                         { "title": "西北菜", "id": 26 },
                         { "title": "特色菜", "id": 27 },
                         { "title": "港菜","id": 28 }
            ],
            thirdPart:[ { "title": "全部", "id": 30},
                        { "title": "水果", "id": 31},
                        { "title": "超市", "id": 32},
                        { "title": "生鲜", "id": 33},
                        { "title": "便利店", "id": 34 },
                        { "title": "粮油水站", "id": 35 },
                        { "title": "零食", "id": 36},
                        { "title": "粮油调味", "id": 37}
            ],
            fourthPart: [],
            sort: [
                { "title": "综合排序", "id": 0 },
                { "title": "销量最高", "id": 1 },
                { "title": "速度最快", "id": 2 },
                { "title": "评分最高", "id": 3 },
                { "title": "起送价最低", "id": 4 },
                { "title": "配送费最低", "id": 5 }
            ],
            sort_show: false,
            showMiddle: '综合排序',
            itemNext: [],
            isScroll: true
        }
    },
    created() {
        console.log($)
        window.onscroll = function() {
            // let height = window.scrollY;
            let height = document.documentElement.scrollTop;
            // 控制显隐
            if (height >= 400) {
                this.cricle = true;
            }
            if (height < 400) {
                this.cricle = false;
            }
            if (height >= 1100) {
                if (this.isScroll) {
                    this.ITEM = this.ITEM.concat(this.itemNext);
                    this.isScroll = false;
                } else {
                    return;
                }
            }
            // 绑定作用域
        }.bind(this)
        // 组件创建完成时  接受点击传递的数据
        this.title = this.$store.state.title;
        // 请求渲染列表数据
        this.$http
            .get('../../../static/store/store.json')
            .then(res => {
                if (res.data) {
                    this.ITEM = res.data;
                    this.itemNext = res.data;
                }
            })
        // 点击列表页显示的分类页面选项
        this.$http
            .get('../../../static/list/kuaican.json')
            .then(res => {
                if (res.data) {
                    this.firstPart = res.data;
                }
            })
        this.$http  
            .get('../../../static/list/dessert.json') 
            .then(res => {
                if (res.data) {
                    this.fourthPart = res.data;
                }
            })
        this.getStateData();
    },
    methods: {
        itemSort(e) {
            console.log(e.target)
        },
        getStateData() {
            // console.log(this)
        },
        // 点击箭头，返回上一个页面
        goBack() {
            history.go(-1)
        },
        // 点击按钮，返回顶部
        goTop() {
            window.scrollTo(0, 0)
        },
        showMore(e) {
            this.num++;
            this.sort_show = false;
            if (this.num % 2 === 1) {
                e.target.className = 'focus';
                this.scroll_show = true;
            } else {
                e.target.className = 'back';
                this.scroll_show = false;
            }
        },
        showMoreTwo(e) {
            this.num++;
            this.scroll_show = false;
            if (this.num % 2 === 1) {
                e.target.className = 'focus';
                this.sort_show = true;
            } else {
                e.target.className = 'back';
                this.sort_show = false;                
            }
        },
        // 排序情况
        sortData() {
            if (this.$route.params.id == 0) {
                this.showMiddle = '综合排序';
                this.sort_show = false; 
                this.num = 0; 
                this.ITEM.sort((a, b) => {
                    return (a.price - a.dispatch) - (b.price - b.dispatch)
                })
            }
            if (this.$route.params.id == 1) {
                this.showMiddle = '销量最高'
                this.sort_show = false; 
                this.num = 0; 
                this.ITEM.sort((a, b) => {
                    return parseInt(b.sales) - parseInt(a.sales)
                })
            }
            if (this.$route.params.id == 2) {
                this.showMiddle = '速度最快';
                this.sort_show = false; 
                this.num = 0;                
                this.ITEM.sort((a, b) => {
                    return parseInt(a.time) - parseInt(b.time)
                })
            }
            if (this.$route.params.id == 3) {
                this.showMiddle = '评分最高'
                this.sort_show = false; 
                this.num = 0; 
                this.ITEM.sort((a, b) => {
                    return parseInt(a.sales) - parseInt(b.sales)
                })
            }
            if (this.$route.params.id == 4) {
                this.showMiddle = '起送价最低';
                this.sort_show = false; 
                this.num = 0;                 
                this.ITEM.sort((a, b) => {
                    return parseInt(a.price) - parseInt(b.price)
                })
            }
            if (this.$route.params.id == 5) {
                this.showMiddle = '配送费最低'; 
                this.sort_show = false; 
                this.num = 0;              
                this.ITEM.sort((a, b) => {
                    return a.dispatch - b.dispatch
                })
            }
        }
    },
    watch: {
        $route() {
            // console.log(this.$route.params.id);
            // console.log(this.ITEM);
            this.sortData()
        }
    }
}
</script>