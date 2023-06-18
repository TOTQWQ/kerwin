import { defineStore } from "pinia";
import axios from 'axios';
import { computed, ref } from "vue";
import useCityStore from './cityStore';

const cityStore = useCityStore();
const useCinemaStore = defineStore('cinema', () => {

    const cinemaList = ref([]);

    const getCinemaList = async () => {
        const data = await axios({
            url: `https://m.maizuo.com/gateway?cityId=${cityStore.cityId}&ticketFlag=1&k=5132413`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16858833176532288774930433"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        });
        cinemaList.value = data.data.data.cinemas;
    };

    const filterCinemaList = computed(() => {
        return (type) => cinemaList.value.filter(item => item.eTicketFlag === type)
    });

    const clearCinemaList = () => {
        cinemaList.value = [];
    }

    return {
        cinemaList,
        getCinemaList,
        filterCinemaList,
        clearCinemaList,
    }
});

export default useCinemaStore;