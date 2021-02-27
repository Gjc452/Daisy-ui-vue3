import './lib/wish.scss';
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css';
import Markdown from './components/Markdown.vue';
import Icon from './lib/Icon.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('Markdown', Markdown);
app.component('Icon', Icon);
