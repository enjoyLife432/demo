import Vue from 'vue';
import Vuex, { Store } from 'vuex';

Vue.use(Vuex);

export default new Store({
    state: {
        num: 0,
        title: '生鲜果蔬',
        cricle: false
    },
    mutations: {
        getState(state, title) {
            state.title = title
        },
        addNum(state, num) {
            state.num += +num;
        },
        reduceNum(state, num) {
            state.num -= num
        },
        addPrice(state, num) {
            state.num += +num;
        },
        reducePrice(state, num) {
            state.num -= num;
        }
    },
    actions: {

    },
    getters: {

    }
})