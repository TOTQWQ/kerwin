import { CHANGE_CHINEMA_LIST, GET_CHINEMA_LIST } from '../type.js';
import axios from 'axios';

const cinemaModule = {
    namspaced: true,
    state() {
        return {
            chinemaList: [],
        }
    },
    //唯一修改状态的位置
    mutations: {
        [CHANGE_CHINEMA_LIST](state, data) {
            state.chinemaList = data;
        }
    },
    //同步+异步
    actions: {
        async [GET_CHINEMA_LIST](store) {
            const data = await axios({
                url: 'https://m.maizuo.com/gateway?cityId=210300&ticketFlag=1&k=5132413',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16858833176532288774930433"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            });
            store.commit(CHANGE_CHINEMA_LIST, data.data.data.cinemas);
        }
    },
    //getter store的计算属性
    getters: {
        filterCinemaList(state) {
            return (type) => {
                return state.chinemaList.filter(item => item.eTicketFlag === type)
            }
        }
    }
};

export default cinemaModule;