<script setup lang="ts">
import { getHomeBannerApi } from '@/services/home';
import CustomNavbar from './components/CustomNavbar.vue';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { BannerItem } from '@/types/home';

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
    <CustomNavbar />
    <XtxSwiper :data="bannerList" />
    <view class="index">index</view>
</template>

<style lang="scss">
//</style>
