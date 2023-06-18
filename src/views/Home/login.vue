<template>
    <h3>前台登录</h3>
    <button @click="handleLogin">登录</button>
    <button @click="handleBack">返回</button>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { inject, onBeforeMount, onBeforeUnmount } from 'vue';
// import { useStore } from 'vuex';
// import { CHANGE_TABBAR } from '../../store/type.js';

// const tabShow = inject('tabShow');
const router = useRouter();
// const store = useStore();

// tabShow.value = false;

const handleLogin = () => {
    localStorage.setItem('token', 'kerwin');
    router.push("/");
    // tabShow.value = true;
}

const handleBack = () => {
    router.back();
    // tabShow.value = true;
}

// onBeforeMount(() => {
//     store.commit('TabbarModule/' + [CHANGE_TABBAR], false);
// })

// onBeforeUnmount(() => {
//     store.commit('TabbarModule/' + [CHANGE_TABBAR], true);
// })
</script>