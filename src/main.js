import { createApp } from 'vue'
import App from './App.vue'
import components from "core-js/stable/dom-collections";
import router from "@/routes/router";
const app = createApp(App)
components.forEach(component=>{
    app.component(component.name,component)
})
app.use(router)
    .mount('#app')
