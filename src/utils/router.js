import VueRouter from 'vue-router';
import Test from '@/views/test';
import FormTest from '@/views/formTest';
import SalePage from '@/views/salePage';

const routes = [
  {
    path: '/',
    name: '表格组件封装测试',
    component: Test
  },
  {
    path: '/form',
    name: '表单组件封装测试',
    component: FormTest
  },
  {
    path: '/page',
    name: '页面封装测试',
    component: SalePage
  }
];

const router = new VueRouter({
  routes
});

export default router;
