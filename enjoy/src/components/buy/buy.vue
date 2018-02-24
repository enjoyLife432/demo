<template>
  <div class="buy">
      <header class="header">
          <span class="go_back" @click="goBack()"></span>
          <h1>菜公社</h1>
      </header>
      <!-- 代金券 -->
      <div class="pink clearfix">
          <span class="ling"></span>
          <span>可领20元-50元代金券</span>
          <span class="pull_right"></span>
      </div>
      <!-- 点菜等 -->
      <div class="aside">
          <router-link to=""><span>点菜</span></router-link>
          <router-link to=""><span>评价</span></router-link>
          <router-link to=""><span>商家</span></router-link>
      </div>
      <!-- 店家介绍 -->
      <div class="content_text" @click="showAll()">
          <span class="text_span">感谢你光临本店！本店为菜公社品牌指定加盟商，全国3180家门店为您服务！保质、保量、保新鲜！菜公社--您身边的超级菜市场，足不出户让你享受美食</span>
          <span class="pull_right"></span>
      </div>
      <!-- 模板 -->
    <div class="show_all" v-show="isAll">
        <h2>商家公告</h2>
        <span class="text_span">感谢你光临本店！本店为菜公社品牌指定加盟商，全国3180家门店为您服务！保质、保量、保新鲜！菜公社--您身边的超级菜市场，足不出户让你享受美食</span>
        <p class="close" @click="closeText()"></p>
    </div>
    <div class="aside_left clearfix">
        <router-link :to="'/buy/' +$route.params.storeName +'/type/' + item.id" v-for="(item, index) in list" v-text="item.title" :key="index"></router-link>
    </div>
    <div class="content_right">
        <router-view></router-view>
    </div>
    <div class="buyCar">
        <span class="left">共¥{{$store.state.num}}</span><span class="right">结算</span>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            isAll: false
        }
    },
    created() {
        console.log(this)
        this.$http
            .get('../../../static/buy/aside.json')
            .then(res => {
                // console.log(res.data)
                if (res.data) {
                    this.list = res.data
                }
            })
    },
    methods: {
        goBack() {
            history.go(-1)
        },
        showAll() {
            this.isAll = true;
        },
        closeText() {
            this.isAll = false;
        }
    }
}  
</script>
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
.buy {
      .header {
        height: 45px;
        text-align: center;
        padding:0 10px;
        box-sizing: border-box;
        line-height: 45px;
        position: relative;
        border-bottom: 1px solid #eee;
        .go_back {
            display: block;
            width: 12px;
            height: 12px;
            border:1px solid transparent;
            border-left-color:#333;
            border-top-color:#333;
            transform: rotate(-45deg);
            .position(14px);
            left:20px;
        }
        h1 {
            font-size: 20px;
        }
    }
    // 代金券
    .pink {
        background: #fff8e8;
        height:40px;
        text-align: left;
        font-size: 14px;
        padding: 12px 10px;
        box-sizing: border-box;
        .ling {
            display: inline-block;
            width:16px;
            height:16px;
            background:url('../../../static/small/ling.jpg') no-repeat;
            background-size: cover;
            vertical-align: middle;
        }
        .pull_right {
            float: right;
            width: 8px;
            height: 8px;
            border-top: 1px solid #666;
            border-right: 1px solid #666;
            transform: rotate(45deg);
        }
    }
    // 点菜
    .aside {
        width:100%;
        height: 60px;
        line-height: 60px;
        border-bottom: 1px solid #eee;
        a {
            display: inline-block;
            width:30%;
            box-sizing:border-box;
            span {
                display: inline-block;
                height:56px;
                font-size: 14px;
                border-bottom: 4px solid orange;
            }
        }
    }
    // 店家介绍
    .content_text {
        height: 20px;
        line-height: 14px;
        padding: 14px 10px;
        .text_span {
            display: inline-block;
            width:90%;
            text-align: left;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .pull_right {
            float: right;
            width: 10px;
            height: 10px;
            border-top: 1px solid #666;
            border-right: 1px solid #666;
            transform: rotate(45deg);
        }
    }
    // 蒙版
    .show_all {
        position: fixed;
        left: 0px;
        top: 0px;
        min-height:1000px;
        background-color: rgba(0, 0, 0, .7);
        box-sizing: border-box;
        padding-top: 200px;
        h2 {
            padding-top:10px;
            color: #333;
            background:#fff;
        }
        span {
            color: #333;
            background: #fff;
            display: inline-block;
            width: 100%;
            height:100px;
            font-size: 14px;
            line-height: 20px;
            box-sizing: border-box;
            padding: 10px 10px;
            margin-bottom:20px;
        }
        .close {
            width: 40px;
            height: 40px;
            border: 1px solid #fff;
            border-radius: 50%;
            position: absolute;
            left: 50%;
            margin-left: -20px;
            &:before {
                content: "";
                width: 40px;
                height: 10px;
                border-bottom: 1px solid #fff;
                position: absolute;
                left: 3px;
                top: 10px;
                transform: rotate(45deg)
            }
            &:after {
                content: "";
                width: 40px;
                height:10px;
                border-top: 1px solid #fff;
                position: absolute;
                left: 2px;
                top: 16px;
                transform: rotate(-45deg);
            }
        }
    }
    .aside_left {
        width:100px;
        height:400px;
        background: #efefef;
        overflow: scroll;
        float: left;
        &::-webkit-scrollbar {
            display: none;
        }
        a {
            display: block;
            width:100px;
            padding:0 10px;
            height: 50px;
            line-height: 50px;
            .overflow();
            box-sizing: border-box;
            border-bottom: 1px solid #eee;
            &.router-link-active {
                background:#fff;
            }
        }
    }
    .content_right {
        margin-left: 110px;
        min-height:400px;
        // background: orange;
    }
    .buyCar {
        width: 100%;
        height:60px;
        left: 60px;
        position: fixed;
        bottom: 0px;
        left: 0px;
        background: orange;
        span {
            display: inline-block;
            width: 50%;
            height: 100%;
            line-height: 60px;
            font-size: 16px;
        }
        .left {
            box-sizing: border-box;
            border-right: 1px solid #eee;
        }
    }
}
</style>
