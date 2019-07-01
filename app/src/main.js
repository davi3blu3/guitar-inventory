import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import * as firestorePlugin from 'vuefire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import store from './store';

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyDHcYTozAdAYOoDqRwN2FIWgGP9cwnvcAU',
  authDomain: 'guithub.firebaseapp.com',
  databaseURL: 'https://guithub.firebaseio.com',
  projectId: 'guithub',
  storageBucket: '',
  messagingSenderId: '512049914421'
});

export const db = firebase.firestore();
Vue.use(firestorePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
