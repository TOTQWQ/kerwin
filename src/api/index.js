import axios from '../util/config';
import api from './path';

const request = {
    async getEway(params) {
        const res = await axios({
            url: api.gateway,
            params: params,
            headers: {
                'X-Client-Info': '{"a": "3000", "ch": "1002", "v": "5.2.1", "e": "16858833176532288774930433", "bc": "210300"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        });
        return res.data;
    },
    async getCinemaList(params) {
        const res = await axios({
            url: api.gateway,
            params: params,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16858833176532288774930433"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        });
        return res.data;
    },
    async getCities(params) {
        const res = await axios({
            url: api.gateway,
            params: params,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16858833176532288774930433","bc":"210300"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        });
        return res.data;
    },
    //测试跨域请求
    /* async getJDInfo() {
        await axios({
            url: '/pc/game/nav/info',
        }).then((params) => {
            console.log(params);
        });
    } */
}

export default request;