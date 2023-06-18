import { defineStore } from 'pinia';
import { ref } from 'vue';

// <tabbar> Store ID
const useTabbarStore = defineStore('tabbar', () => {
    const isTabbarShow = ref(true);
    const change = (value) => {
        isTabbarShow.value = value;
    }
    return {
        isTabbarShow,
        change
    }
})

export default useTabbarStore;