import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

import './style.scss';

const tabs = [
  {
    name: '推荐',
    path: '/recommend',
  },
  {
    name: '歌手',
    path: '/singer',
  },
  {
    name: '排行',
    path: '/top-list',
  },
  {
    name: '搜索',
    path: '/search',
  },
];

export default defineComponent({
  name: 'Tab',
  setup() {
    return () => (
      <div class="tab">
        {tabs.map((tab) => (
          <RouterLink class="tab-item" key={tab.path} to={tab.path}>
            <span class="tab-link">{tab.name}</span>
          </RouterLink>
        ))}
      </div>
    );
  },
});
