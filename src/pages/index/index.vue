<script setup lang="ts">
import { getHomeBannerApi } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem } from '@/types/home';
import CustomNavbar from './components/CustomNavbar.vue';
import CategoryPanel from './components/CategoryPanel.vue';

const bannerList = ref<BannerItem[]>([])

const getHomeBannerData = async () => {
    const res = await getHomeBannerApi()
    console.log(res);
    bannerList.value = res.result
}

onLoad(() => {
    getHomeBannerData()
})
</script>

<template>
    <!-- 自定义导航栏 -->
    <CustomNavbar />
    <!-- 自定义轮播图 -->
    <XtxSwiper :data="bannerList" />
    <!-- 分类面板 -->
    <CategoryPanel />
</template>

<style lang="scss">
page {
    background-color: #f7f7f7;
}
</style>
