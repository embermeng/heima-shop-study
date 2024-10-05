import { http } from "@/utils/http"
import type { BannerItem, CategoryItem, GuessItem, HotItem } from "@/types/home"
import type { PageParams, PageResult } from "@/types/global"

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

/* 
    猜你喜欢-小程序
*/
export const getHomeGoodsGuessLikeApi = (data?: PageParams) => {
    return http<PageResult<GuessItem>>({
        method: 'GET',
        url: '/home/goods/guessLike',
        data
    })
}