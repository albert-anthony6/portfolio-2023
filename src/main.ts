import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faCode, faEnvelope, faArrowRight, faArrowDownLong } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

library.add(faCode, faEnvelope, faGithub, faLinkedinIn, faArrowRight, faArrowDownLong)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
