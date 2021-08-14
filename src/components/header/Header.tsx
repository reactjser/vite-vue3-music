import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

import './style.scss';

export default defineComponent({
  name: 'Header',
  setup() {
    return () => (
      <div class="header">
        <span class="icon"></span>
        <h1 class="text">Chicken Music</h1>
        {/* <RouterLink class="mine" to="/user">
          <i class="icon-mine"></i>
        </RouterLink> */}
      </div>
    );
  },
});
