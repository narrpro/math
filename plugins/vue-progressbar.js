import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'


const options = {
    color: '#263238',
    failedColor: '#FF5722',
    thickness: '15px',
    transition: {
        speed: '0.1s',
        opacity: '0.5s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: true,
    autoFinish: true
}

Vue.use(VueProgressBar, options)