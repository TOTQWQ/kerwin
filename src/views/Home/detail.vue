<template>
    <button @click="handleBack">返回</button>
    <h3 @click="handleClick">猜你喜欢</h3>
    <div>
        <input type="text" v-model="data.inputVal">
        {{ data.inputVal }}
    </div>
</template>
<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, toRefs, watch, watchEffect } from 'vue';
import { onBeforeRouteUpdate, useRouter, useRoute } from 'vue-router';
import useTabbarStore from '../../store/tabbarStore.js';

const router = useRouter();
const route = useRoute();
const data = reactive({
    inputVal: '2333'
});
const store = useTabbarStore();


watch(() => data.inputVal, (newValue, oldValue) => {
    console.log(newValue);
}, { immediate: true });
// watchEffect(() => {
//     console.log(data.inputVal);
// })

onMounted(() => {
    getData(route.query.id);
});

const getData = (id) => {
    console.log(id);
};

const handleBack = () => {
    router.back();
};

const handleClick = () => {
    router.push({
        path: '/home/detail',
        query: { id: 333 }
    })
};

onBeforeRouteUpdate((to, from) => {
    getData(to.query.id);
});

onBeforeMount(() => {
    // store.isTabbarShow = false;
    // store.$patch({
    //     isTabbarShow: false
    // })
    store.change(false);
});

onBeforeUnmount(() => {
    // store.isTabbarShow = true;
    // store.$patch({
    //     isTabbarShow: true
    // });
    // store.$reset();
    store.change(true);
});
</script>