import { http } from "@/utils/http"
import type { BannerItem, CategoryItem, HotItem } from "@/types/home"

/**
 * 
 * @param distributionSite 广告区域展示位置，1 为首页（默认值），2 为商品分类页
 */
export const getHomeBannerApi = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: 'GET',
        url: '/home/banner',
        data: {
            distributionSite
        }
    })
}

/* 
    首页-前台分类-小程序
*/
export const getHomeCategoryApi = () => {
    return http<CategoryItem[]>({
        method: 'GET',
        url: '/home/category/mutli',
    })
}

/* 
    首页-热门推荐-小程序
*/
export const getHomeHotApi = () => {
    return http<HotItem[]>({
        method: 'GET',
        url: '/home/hot/mutli',
    })
}
