import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './error'
import vuetify from './plugins/vuetify'
import './plugins/vue-toasted'
import firebase from './plugins/firebase'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false



// export const EventBus = new Vue()

new Vue({
    router,
    store,
    // beforeCreate() {
    // this.$store.dispatch("getMemberInfo")

    // },
    vuetify,
    render: h => h(App)
}).$mount('#app')