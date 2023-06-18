import { defineStore } from 'pinia';
import { reactive, ref, toRefs } from 'vue';

// <tabbar> Store ID
const useCityStore = defineStore('city', () => {
    const data = reactive({
        cityName: '北京',
        cityId: 110100
    });
    const change = (cityName, cityId) => {
        data.cityName = cityName;
        data.cityId = cityId;
    }
    return {
        ...toRefs(data),
        change
    }
})

export default useCityStore;