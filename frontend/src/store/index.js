import Vue from "vue"
import Vuex from "vuex"
import storeUsers from "./modules/storeUsers"

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        storeUsers
    }
})