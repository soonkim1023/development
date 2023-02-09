import { createStore } from "vuex";
import axios from "axios";
export default createStore({
    state: {
        counter: 10,
    },
    getters: {
        time2(state) {
            console.log("getters---", state)
            return state.counter * 2;
        },
    },
    mutations: {
        setCounter(state, value) {
            console.log(state.counter, value);
            state.counter = state.counter * value;
        },
    },
    actions: {
        refreshList(context, payload) {
            return axios.get(`https://dog.ceo/api/breed/hound/images/random/${payload}`)
        },
    },
});