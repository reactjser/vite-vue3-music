import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

import Header from './components/header/Header';
import Tab from './components/tab/Tab';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <Header />
        <Tab />
        <RouterView />
      </>
    );
  },
});
