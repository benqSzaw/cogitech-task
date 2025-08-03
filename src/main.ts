import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import './style.css';
import App from './App.vue';
import store from './lib/store.ts';

const app = createApp(App);
app.use(PrimeVue, {
  unstyled: true,
});
app.use(ConfirmationService);
app.use(ToastService);
app.use(store);
app.mount('#app');
