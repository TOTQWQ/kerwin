<template>
    <h3>首页</h3>
</template>
<script setup>
import myPromise from '../../myPromise'

const promise = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000)
});

promise.then()


</script>