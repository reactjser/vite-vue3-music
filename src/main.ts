import { createApp } from 'vue';
import App from './App';
import router from './router';
import lazyloadPlugin from './directives/lazyload';
import defaultImage from './assets/images/default.png';
import '/@/assets/scss/index.scss';

const app = createApp(App);
app.use(router);
app.use(lazyloadPlugin, {
  loading: defaultImage,
});
app.mount('#app');
