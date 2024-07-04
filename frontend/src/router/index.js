import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/UserLogin.vue';
import Signup from '../components/UserSignup.vue';
import Mytask from '../components/TodoList.vue';

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Signup},
   {path: '/todo', component: Mytask}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
