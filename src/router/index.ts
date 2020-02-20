import Vue from 'vue';
import VueRouter from 'vue-router';
/**
  * Pages
  */
import Home from '../views/Home.vue';
import AddBook from '../views/AddBook.vue';
/**
  * Vue router use
 */
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add',
    name: 'Add',
    component: AddBook,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
