import { http } from '@/utils/http'

/**
 * 加入购物车
 * @param data 请求参数
 * @returns
 */
export const postMemberCartApi = (data: { skuId: string; count: number }) => {
    return http({
        method: 'POST',
        url: '/member/cart',
        data,
    })
}
