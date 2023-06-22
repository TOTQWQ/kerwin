<template>
    <div class="page">
        <h3 @click="handleMy">我的</h3>
        <Button type="primary" @click="handleClick">主要按钮</Button>
    </div>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router';
import { Button } from 'vant';


onBeforeRouteLeave(() => {
    const answer = window.confirm('你确定要离开嘛？');
    if (!answer) return false;
})

const handleClick = (event) => {
    console.log(event);
}

const handleMy = () => {
    console.log(22);
}
</script>