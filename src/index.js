// import App from './App.jsx';

import Vue from 'vue';
import './main.css';

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  template: `<div>{{message}}</div>`
});