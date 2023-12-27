import './assets/main.scss'

import { createApp } from 'vue'
import Header from './views/header.vue'
import Container from './views/container.vue'
import Header3 from './views/header-three.vue'
import Container2 from './views/container2.vue'
import Container3 from './views/container3.vue'
import Footer from './views/footer.vue'

createApp(Header).mount('#header')
createApp(Container).mount('#container')
createApp(Header3).mount('#header-three')
createApp(Container2).mount('#container2')
createApp(Container3).mount('#container3')
createApp(Footer).mount('#footer')