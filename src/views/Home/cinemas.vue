<template>
    <div class="page">
        <van-nav-bar title="影院">
            <template #left>
                <div @click="handleChange">{{ cityStore.cityName }}</div>
            </template>
            <template #right>
                <van-icon name="search" size="22" color="black" />
            </template>
        </van-nav-bar>
        <div>
            <select v-model="type">
                <option :value="1">App订票</option>
                <option :value="0">前台兑换</option>
            </select>
            <ul>
                <!-- <li v-for="item of store.getters.filterCinemaList(type)" :key="item.cinemaId">
                {{ item.name }}
            </li> -->

                <li v-for="item of store.filterCinemaList(type)" :key="item.cinemaId">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import useCinemaStore from '../../store/cinemaStore';
import { NavBar as vanNavBar, Icon as vanIcon } from 'vant';
import { useRouter } from 'vue-router';
import useCityStore from '../../store/cityStore';
// import { useStore } from 'vuex';
// import { GET_CHINEMA_LIST } from '../../store/type.js';

// const store = useStore();
const store = useCinemaStore();
const type = ref(1);
const router = useRouter();
const cityStore = useCityStore();

onMounted(() => {
    // if (store.state.CinemaModule.chinemaList.length == 0) {
    //     store.dispatch(GET_CHINEMA_LIST);
    // } else {
    //     console.log('缓存');
    // }
    if (store.cinemaList.length == 0) {
        store.getCinemaList();
    } else {
        console.log('缓存');
    }
});

const handleChange = () => {
    router.push({
        path: '/home/city',
        query: { id: 123 }
    });
    store.clearCinemaList();
}
// const filterCinameList = computed(() => {
//     return store.state.chinemaList.filter(item => item.eTicketFlag === type.value);
// })
</script>
<style scoped>
li {
    padding: 10px;
}
</style>