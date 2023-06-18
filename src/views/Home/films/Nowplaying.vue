<template>
    <!-- <ul>
        <router-link custom :to="'/detail/' + item.filmId" v-slot="{ navigate }" v-for="item of list" :key="item.filmId">
            <li @click="navigate">
                {{ item.name }}
            </li>
        </router-link>
        <li v-for="item of list" :key="item.filmId" @click="handleClick(item.filmId)">
            {{ item.name }}
        </li>
    </ul> -->
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" :immediate-check="false" offset="0"
        @load="onLoad">
        <van-cell v-for="item in list" :key="item.filmId" @click="handleClick">
            <img :src="item.poster" style="width: 100px;float: left;">
            <div>{{ item.name }}</div>
        </van-cell>
    </van-list>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import getData from '../getData.js';
import { List as vanList, Cell as vanCell } from 'vant';

const router = useRouter();
const list = ref([]); //new Proxy({ value: [] })
const loading = ref(false);
const finished = ref(false);
const pageNum = ref(1);
const total = ref(0);

onMounted(() => {
    getData(pageNum).then((res) => {
        list.value = res.data.films;
        total.value = res.data.total;
    });
});

const handleClick = (params) => {
    router.push({
        path: '/home/detail',
        query: {
            id: params
        }
    });
}

const onLoad = () => {
    if (total.value == list.value.length) {
        finished.value = true;
        return;
    }
    pageNum.value++;
    getData(pageNum).then((res) => {
        list.value.push(...res.data.films);
        loading.value = false;
    })
}


</script>
<style scoped lang="scss">
:deep(.van-cell__value) {
    text-align: left;
}
</style>