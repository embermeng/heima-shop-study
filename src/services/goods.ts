// 商品详情
// 规格集合一定要和skus集合下的specs 顺序保持一致

import { http } from "@/utils/http"
import type { GoodsResult } from "@/types/goods"

/**
 * 商品详情
 * @param id 商品id
 * @returns 
 */
export const getGoodsByIdApi = (id: string) => {
    return http<GoodsResult>({
        method: 'GET',
        url: '/goods',
        data: {
            id
        }
    })
}