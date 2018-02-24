<template>
<div class="type">
    <ul>
        <li v-for="item in list">
            <img :src="'../../../static/img/item/'+ item.img" alt="">
            <div class="content">
                <h3>{{item.title}}</h3>
                <p class="sales">{{'已售' + item.sales + '份'}}</p>
                <span class="price">{{'¥' + item.price}}</span>
                <span class="add" @click="addNum(item); $store.commit('addPrice', item.price)">+</span>
                <span class="num" v-show="item.num > 0">{{item.num}}</span>
                <span class="reduce" v-show="item.num > 0" @click="reduceNum(item); $store.commit('reducePrice', item.price)">-</span>
            </div>
        </li>
    </ul>
</div>
</template>
<style lang="less" scoped>
.type {
    ul {
        padding-left: 5px;
        padding-top:5px;
    }
    li {
        padding-left: 5px;
        padding-bottom:5px;
        border-bottom: 1px solid #ccc;
        img {
            height: 50px;
            float: left;
        }
        .content {
            margin-left: 78px;
        }
        h3 {
            font-size: 14px;
            font-weight: normal;
        }
        .sales {
            font-size: 12px;
            color: #999;
        }
        .price {
            font-size: 14px;
            color: red;
        }
        .add,
        .reduce,
        .num {
            float: right;
        }
        .add,
        .reduce {
            width: 20px;
            height:20px;
            color: red;
            line-height: 17px;
            font-size: 20px;
            border: 1px solid #ccc;
            border-radius: 50%;
            text-align: center;
        }
        .num {
            margin: 0 5px;
        }
    }
}
</style>
<script>
export default {
    data() {
        return {
            list: [],
            all: {}
        }
    },
    methods: {
        getData() {
            let id = this.$route.params.id;
            if (this.all[id]) {
                this.list = this.all[id];
            } else {
                this.$http
                .get('../../../static/data/' + id + '.json')
                .then(res => {
                    if (res.data.errno === 0) {
                        this.list = res.data.data;
                        this.all[id] = this.list;
                    }
                })
            }
        },
        addNum(item) {
            item.num++;
        },
        reduceNum(item) {
            item.num--;
        }
    },
    created() {
        this.getData();
    },
    watch: {
      $route() {
          this.getData()
      }
    }
}
</script>