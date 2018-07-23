// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '/home/ankit/Documents/projects/cnvrg_task/node_modules/jquery.flowchart/jquery.flowchart.js'
// import "jquery.flowchart"

// import "jquery.flowchart"
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
