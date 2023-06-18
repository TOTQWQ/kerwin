<template>
    <router-view v-slot="{ route, Component }">
        <transition name="fade">
            <component :is="Component"></component>
        </transition>
    </router-view>
    <div v-show="store.isTabbarShow" class="tabbars">
        <tab-bar :title="123" @laozi="handleClick"></tab-bar>
    </div>
</template>
<script setup>
import TabBar from '../../components/Home/TabBar.vue';
import { ref, provide, computed } from 'vue';
// import { mapState, useStore } from 'vuex';
import useTabbarStore from '../../store/tabbarStore.js';

// const tabShow = ref(true);
// provide('tabShow', tabShow);
// const store = useStore();
const store = useTabbarStore();

const handleClick = (val, callback) => {
    callback(++val);
}
// const isTabbarShow = computed(() => {
//     return store.state.TabbarModule.isTabbarShow
// });

</script>
<style scoped type="scss">
.tabbars {
    height: 50px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>