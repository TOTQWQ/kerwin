import { defineStore } from "pinia";
import axios from 'axios';

const useCinemaStore = defineStore('cinema', {
    state: () => {
        return {
            cinemaList: []
        }
    },
    actions: {
        async getCinemaList() {
            const data = await axios({
                url: 'https://m.maizuo.com/gateway?cityId=210300&ticketFlag=1&k=5132413',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16858833176532288774930433"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            });
            this.cinemaList = data.data.data.cinemas;
        }
    },
    getters: {
        filterCinemaList() {
            return (type) => this.cinemaList.filter(item => item.eTicketFlag === type)
        }
    }
});

export default useCinemaStore;