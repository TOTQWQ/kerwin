<template>
    <div class="page">
        <van-index-bar :index-list="indexList">
            <div v-for="item in data.list" :key="item.type">
                <van-index-anchor :index="item.type" />
                <van-cell v-for="data in item.list" :key="data.cityId" :title="data.name" @click="handleChange(data)" />
            </div>
        </van-index-bar>
    </div>
</template>
<script setup>
// import axios from 'axios';
import { reactive, onMounted } from 'vue';
import _ from 'lodash';
import { IndexBar as vanIndexBar, Cell as vanCell, IndexAnchor as vanIndexAnchor } from 'vant';
import { computed } from 'vue';
import useCityStore from '../../store/cityStore';
import { useRouter } from 'vue-router';
import request from '../../api/index';

const data = reactive({
    list: []
});
let newCity = [];
const store = useCityStore();
const router = useRouter();

onMounted(() => {
    /* const res = await axios({
        url: 'https://m.maizuo.com/gateway?k=6201034',
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16858833176532288774930433","bc":"210300"}',
            'X-Host': 'mall.film-ticket.city.list'
        }
    }) */
    request.getCities().then((params) => {
        data.list = filterCity(params.data.cities);
    });
});

/* const filterCity = (cities) => {
    const letterArr = [];
    for (let i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i));
    }

    for (let i = 0; i < letterArr.length; i++) {
        newCity.push({
            type: letterArr[i],
            list: cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letterArr[i])
        })
    }

    newCity = newCity.filter(item => item.list.length);
} */

const filterCity = (cities) => {
    cities.sort((item1, item2) => {
        return item1.pinyin.substring(0, 1).toUpperCase().charCodeAt() - item2.pinyin.substring(0, 1).toUpperCase().charCodeAt()
    });

    let groupObj = _.groupBy(cities, item => item.pinyin.substring(0, 1).toUpperCase());


    for (const key in groupObj) {
        newCity.push({
            type: key,
            list: groupObj[key]
        })
    }
    return newCity;
}

const indexList = computed(() => data.list.map(item => item.type));

const handleChange = ({ name, cityId }) => {
    store.change(name, cityId);
    router.go(-1);
}

</script>