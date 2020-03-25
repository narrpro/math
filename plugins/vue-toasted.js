import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'mdi'
})

Vue.toasted.register('error', (payload) => {
    return payload
}, {
    icon: 'mdi-owl',
    position: 'top-left',
    duration: 3000,
    className: 'subheading',
    type: '',
    action: {
        text: '닫기',
        onClick: (e, toastObject) => {
            toastObject.goAway(0)
        }
    }
})