// import App from './App.jsx';

import Vue from 'vue';
import './main.css';

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue !' + new Date().toTimeString(),
    posts: []
  },
  created() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => {
        this.posts = posts;
      });
  },
  template: `<div>
  {{message}}
  <hr/>
  Total {{posts.length}} posts: 
  <ul>
    <li v-for="post in posts" key={{post.id}}>{{post.title}}</li>
  </ul>
</div>`
});
