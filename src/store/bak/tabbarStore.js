import { defineStore } from 'pinia';

// <tabbar> Store ID
const useTabbarStore = defineStore('tabbar', {
    //option API
    state: () => {
        return {
            isTabbarShow: true,
        }
    },
    actions: {
        change(value) {
            this.isTabbarShow = value;
        }
    }
});

export default useTabbarStore;