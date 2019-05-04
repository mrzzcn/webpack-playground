// import App from './App.jsx';

import Vue from 'vue';

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  template: `<div>{{message}}</div>`
});