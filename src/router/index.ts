import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Singer from '../views/singer/Singer';
import Recommend from '../views/recommend/Recommend';
import TopList from '../views/top-list/TopList';
import Search from '../views/search/Search';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend,
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer,
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: TopList,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
