import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: 'AIzaSyDnjnDQ4C8j-73yWfJf-1v00ZvGGRRt9hk',
    authDomain: 'magicapp-2ef88.firebaseapp.com',
    databaseURL: 'https://magicapp-2ef88-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'magicapp-2ef88',
    storageBucket: 'magicapp-2ef88.appspot.com',
    messagingSenderId: '598107558393',
    appId: '1:598107558393:web:20d5a006a88a699309ad28',
    measurementId: 'G-N4ZRS53BCF'
  };

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);

  nuxtApp.vueApp.provide('firestore', firestore);
  nuxtApp.provide('firestore', firestore);
});
