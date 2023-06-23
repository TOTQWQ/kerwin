<template>
    <div class="page">
        <h3>{{ $t('hello') }}</h3>
        <h3>{{ $t('helloWord', data) }}</h3>
        <button @click="handleChange">切换语言</button>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { reactive } from 'vue';

const { t, locale, messages } = useI18n();

const data = reactive({
    msg: '我操'
});

const handleChange = () => {
    locale.value = 'en';
}

</script>