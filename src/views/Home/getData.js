import axios from 'axios';

async function getData(pageNum) {
    const data = await axios({
        url: `https://m.maizuo.com/gateway?cityId=210300&pageNum=${pageNum.value}&pageSize=10&type=1&k=7941984`,
        headers: {
            'X-Client-Info': '{"a": "3000", "ch": "1002", "v": "5.2.1", "e": "16858833176532288774930433", "bc": "210300"}',
            'X-Host': 'mall.film-ticket.film.list'
        }
    });
    return data.data;
}

export default getData