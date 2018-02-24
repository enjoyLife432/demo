<template>
<div class="home">
    <header class="header">
        <img src="../../../static/banner/bannertemp.e8a6fa63.jpg" alt="">
        <!-- <a href="" class="search-icon"></a> -->
        <div class="search">
            <span class="address">温都水城</span>
            <span class="search_jian"></span>
            <input type="text" class="search_store" placeholder="请搜索你想要的">
            <span class="search_arcile"></span>
            <span class="search_icon"></span>
        </div>
    </header>
    <ul>
        <li v-for="item in aside" class="aside clearfix" @click="$store.commit('getState', item.title)">
            <router-link :to="'list/' + item.id">
                <img :src="'../../../static/aside/' + item.img" alt="">
                <p class="title">{{item.title}}</p>
            </router-link>
        </li>
    </ul>
    <div class="home_list">
        <h2 class="list_title">—— 附近商家 ——</h2>
        <ul>
            <li v-for="item in ITEM">
                <img :src="'../../../static/' + item.img" alt="" class="list_img">
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
    <div class="go_top" v-show="cricle" @click="goTop()">
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
.inline(@width: 135px, @height: 28px, @borderRadius: 10px) {
    width: @width;
    height: @height;
    border-radius: @borderRadius
}
.overflow() {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.home{
    .go_top {
        width:40px;
        height: 40px;
        // background:red;
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
        position: relative;
        img {
            width: 100%;
        }
        .search {
            .address {
                color: #fff;
                .overflow();
                .position();
                left: 10px;
                .inline(135px, 27px, 10px);
                background:#b28821;
                text-align: center;
                line-height: 27px;
                padding-right:15px;
                padding-left:5px;
                box-sizing: border-box;
            }
            .search_jian {
                display: block;
                border: 1px solid transparent;
                .inline(10px, 10px, 0px);
                border-top-color: #fff;
                border-right-color: #fff;
                transform: rotate(45deg);
                .position(19px);
                left: 123px;
            }
            .search_store {
                border: none;
                outline: none;
                .position();
                right: 10px;
                .inline(120px, 28px, 10px);
                padding-left:25px;
            }
            .search_arcile {
                display: inline-block;
                border: 1px solid #333;
                .inline(10px, 10px, 50%);
                .position(19px);
                right:134px;
                z-index: 2;
                background:#FFF;
            }
            .search_icon {
                text-decoration: none;
                &::before {
                    content: "\e904";
                    display: inline-block;
                    transform: rotate(40deg);
                    color: transparent;
                    border-top:1px solid #333;
                    .position(27px);
                    right:136px;
                }
            }
        }
    }
    ul {
        width:100%;
        height:170px;
        padding-bottom:10px;
        .aside {
            width:25%;
            float: left;
            img {
                width:65%;
                display: inline-block;
                padding:8px 5px 5px;
                box-sizing: border-box;
            }
            .title {
                font-size: 12px;
                color:#333;
                padding:0px 0px 5px;
                line-height: 20px;
            }
        }
    }
    .home_list {
        border-top:10px solid #efefef;
        padding-top:15px;
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
        return {
            aside: [],
            ITEM: [],
            cricle: false
        }
    },
    created() {
        // 页面卷动到一定高度时显示返回顶部按钮图案
        window.onscroll = function() {
            // 缓存卷动值
            let height = document.documentElement.scrollTop;
            if (height >= 400) {
                this.cricle = true;
            }
            if (height < 400) {
                this.cricle = false
            }
        // 绑定作用域
        }.bind(this)
        // 之前通过赋值把axios添加，所以Vue的原型上就有了$http的方法
        this.$http
        // 发送请求
            .get('../../../static/aside/aside.json')
            // 监听
            .then(res => {
                // console.log(res.data)
                if (res.data) {
                    this.aside = res.data;
                }
            })
            this.$http
            .get('../../../static/item/item.json')
            .then(res => {
                if (res.data) {
                    this.ITEM = res.data;
                }
            })
    },
    methods: {
        // 点击按钮 返回顶部
       goTop() {
           window.scrollTo(0, 0)
       }
    }
}
</script>