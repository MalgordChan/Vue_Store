import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

createApp(App)
    .use(router)
    .mount('#app')
