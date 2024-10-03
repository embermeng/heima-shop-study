// 定义全局组件的类型
import XtxSwiper from './XtxSwiper.vue'
declare module 'vue' {
    export interface GlobalComponents {
        XtxSwiper: typeof XtxSwiper
    }
}