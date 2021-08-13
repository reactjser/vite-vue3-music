import { defineComponent } from 'vue';
import Header from './components/header/Header';

export default defineComponent({
  name: 'App',
  setup() {
    return () => <Header />;
  },
});
