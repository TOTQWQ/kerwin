import { createStore } from 'vuex';
import CinemaModule from './module/CinemaModule.js';
import TabbarModule from './module/TabbarModule.js';

const store = createStore({
    modules: {
        TabbarModule,
        CinemaModule
    }
});

export default store;