import { createApp } from 'vue'
import App from './App.vue'

import 'regenerator-runtime/runtime'
import 'core-js';
import 'whatwg-fetch'
/*import 'core-js/es6/symbol';
import 'core-js/es6/object';
import 'core-js/es6/function';
import 'core-js/es6/parse-int';
import 'core-js/es6/parse-float';
import 'core-js/es6/number';
import 'core-js/es6/math';
import 'core-js/es6/string';
import 'core-js/es6/date';
import 'core-js/es6/array';
import 'core-js/es6/regexp';
import 'core-js/es6/map';
import 'core-js/es6/set';*/

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice';
import Chart from 'primevue/chart';
import 'primeflex/primeflex.css';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ColorPicker from 'primevue/colorpicker';
import Dropdown from 'primevue/dropdown';
import Knob from 'primevue/knob';
import Listbox from 'primevue/listbox';
import SelectButton from 'primevue/selectbutton';
import ScrollPanel from 'primevue/scrollpanel';
import Sidebar from 'primevue/sidebar';



import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
/*import 'primeflex/src/_variables.scss';
import 'primeflex/src/_grid.scss';
import 'primeflex/src/_formlayout.scss';
import 'primeflex/src/_display.scss';
import 'primeflex/src/_text.scss';
import 'primeflex/src/flexbox/_flexbox.scss';
import 'primeflex/src/_spacing.scss';
import 'primeflex/src/_elevation.scss';*/


//import Dialog from 'primevue/dialog';
const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Toast', Toast);
app.component('Chart', Chart);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('ColorPicker', ColorPicker);
app.component('Dropdown', Dropdown)
app.component('Knob', Knob)
app.component('Listbox', Listbox)
app.component('SelectButton', SelectButton)
app.component('ScrollPanel', ScrollPanel)
app.component('Sidebar', Sidebar)


app.mount('#app');


