import { createApp } from 'vue';
import App from './App';
import router from './router';

// 引入全局样式文件
import '/@/assets/scss/index.scss';

const app = createApp(App);
app.use(router);
app.mount('#app');
