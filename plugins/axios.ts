import axios from 'axios';
export default defineNuxtPlugin((nuxtApp) => {
  let api = axios.create({
    baseURL: 'https://magicapp-2ef88-default-rtdb.asia-southeast1.firebasedatabase.app',
    headers: {
      apiKey: 'AIzaSyDnjnDQ4C8j-73yWfJf-1v00ZvGGRRt9hk',
      authDomain: 'magicapp-2ef88.firebaseapp.com',
      projectId: 'magicapp-2ef88',
      storageBucket: 'magicapp-2ef88.appspot.com',
      messagingSenderId: '598107558393',
      appId: '1:598107558393:web:826c097d682fc14009ad28',
      measurementId: 'G-THLE45LQ04'
    }
  });
  return {
    provide: {
      axios: api
    }
  };
});
