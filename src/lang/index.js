import enLocale from './en';
import chLocale from './ch';
import { createI18n } from 'vue-i18n';

const messages = {
    en: enLocale,
    ch: chLocale,
}

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'ch',
    allowComposition: true,
    legacy: false,  //解决 legacy mode 报错
    globalInjection: true,  //全局使用 $t
    messages
});

export default i18n