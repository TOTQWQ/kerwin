import { CHANGE_TABBAR } from '../type.js';

const tabbarModule = {
    namespaced: true,
    state() {
        return {
            isTabbarShow: true,
        }
    },
    //唯一修改状态的位置
    mutations: {
        [CHANGE_TABBAR](state, data) {
            state.isTabbarShow = data;
        }
    }
};

export default tabbarModule;