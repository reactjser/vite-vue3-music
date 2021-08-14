import { createApp } from 'vue';
import App from './App';
import router from './router';
import lazyloadDirective from './directives/lazyload';
import loadingDirective from '/@/components/base/loading/directive';
import defaultImage from './assets/images/default.png';
import '/@/assets/scss/index.scss';

const app = createApp(App);
app.use(router);
app.use(lazyloadDirective, {
  loading: defaultImage,
});
app.directive('loading', loadingDirective);
app.mount('#app');
