import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import Card from "primevue/card";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";

const app = createApp(App);

app.use(PrimeVue);
app.component('pv-card', Card);
app.component('pv-button', Button);
app.component('pv-toolbar', Toolbar)
app.mount('#app');