<template>
    <div class="page">
        <div class="bar">
            <Swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <SwipeItem>1</SwipeItem>
                <SwipeItem>2</SwipeItem>
                <SwipeItem>3</SwipeItem>
                <SwipeItem>4</SwipeItem>
            </Swipe>
        </div>
        <ul>
            <router-link custom to="/home/films/nowplaying" v-slot="{ isActive, navigate }">
                <li @click="navigate">
                    <span :class="isActive ? 'active' : ''">正在热映</span>
                </li>
            </router-link>
            <router-link custom to="/home/films/comingsoon" v-slot="{ isActive, navigate }">
                <li @click="navigate">
                    <span :class="isActive ? 'active' : ''">即将上映</span>
                </li>
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script setup>
import { Swipe, SwipeItem } from 'vant';
</script>
<style scoped lang="scss">
.bar {
    height: 100px;
    text-align: center;
    line-height: 100px;
}

ul {
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: white;

    li {
        flex: 1;
        margin: 0 20px;

        span {
            padding: 10px 0;
        }

        .active {
            border-bottom: 1px solid red;
        }
    }
}
</style>