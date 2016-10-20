// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
// const test = resolve => {
//   require.ensure(['./components/test.vue'], () => {
//     resolve(require('./components/test.vue'))
//   })
// }

const routes = [{
  path: '/',
  name: 'home',
  component: require('./components/home.vue')
}, {
  path: '/zhichu',
  name: 'zhichu',
  component: require('./components/zhichu.vue')
}, {
  path: '/shouru',
  name: 'shouru',
  component: require('./components/shouru.vue')
}, {
  path: '/zcAnalysis',
  name: 'zcAnalysis',
  component: require('./components/zcAnalysis.vue')
}
]

export default routes
