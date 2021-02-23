import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Frank from './components/Frank.vue';
import Money from './components/Money.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Frank},
    {path: '/money', component: Money}
  ]
});
const app = createApp(App);
app.use(router);
app.mount('#app');
