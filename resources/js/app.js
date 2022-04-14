require('./bootstrap');

// window.Vue = require('vue').default;{{this is same import Vue from 'vue' so we can take any one of this two line in that case i comment out this line}}
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
    // router imported below

import { routes } from './routes';

// import user class
import User from './Helpers/User';
window.User = User
    // import notification class for use globaly
import Notification from './Helpers/Notification';
window.Notification = Notification

// sweet alert start
import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

window.Toast = Toast;

// sweet alert end
window.Reload = new Vue();

const router = new VueRouter({
    routes,
    mode: 'history'
})


const app = new Vue({
    el: '#app',
    router
});