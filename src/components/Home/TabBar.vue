<template>
    <!-- <button @click="handleClick">返回</button> -->
    <div class="tabbar">
        <ul>
            <!-- <li>
                <router-link to="/home/films" active-class="kerwin-active">电影</router-link>
            </li>
            <li>
                <router-link to="/home/cinemas" active-class="kerwin-active">影院</router-link>
            </li>
            <li>
                <router-link to="/home/center" active-class="kerwin-active">我的</router-link>
            </li> -->
            <router-link to="/home/films" custom v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'kerwin-active' : ''" @click="navigate">电影</li>
            </router-link>
            <router-link to="/home/cinemas" custom v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'kerwin-active' : ''" @click="navigate">影院</li>
            </router-link>
            <router-link to="/home/center" custom v-slot="{ isActive, navigate }">
                <li :class="isActive ? 'kerwin-active' : ''" @click="navigate">我的</li>
            </router-link>
            <li @click="handleClick">测试</li>
        </ul>
    </div>
</template>
<script setup>
import { getCurrentInstance } from 'vue';
const _this = getCurrentInstance();
const props = defineProps({
    title: Number
});
const emit = defineEmits(['laozi']);

const handleClick = () => {
    _this.emit('laozi', props.title, (params) => {
        console.log(params);
    });
    // emit('laozi')
}

</script>
<style scoped lang="scss">
.kerwin-active {
    color: red;
}

.tabbar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: white;
    z-index: 100;
    border-top: 1px solid #c7c7c7;

    ul {
        display: flex;

        li {
            flex: 1;
        }
    }
}
</style>