import type { CartItem } from '@/types/cart'
import { http } from '@/utils/http'

/**
 * 加入购物车
 * @param data 请求参数
 */
export const postMemberCartApi = (data: { skuId: string; count: number }) => {
    return http({
        method: 'POST',
        url: '/member/cart',
        data,
    })
}

/**
 * 获取购物车列表
 */
export const getMemberCartApi = () => {
    return http<CartItem[]>({
        method: 'GET',
        url: '/member/cart',
    })
}

/**
 * 删除/清空购物车单品
 * @param data 请求参数 ids: SkuId集合
 */
export const deleteMemberCartApi = (data: { ids: string[] }) => {
    return http({
        method: 'DELETE',
        url: '/member/cart',
        data,
    })
}

/**
 * 修改购物车单品
 * @param data 请求参数 ids: SkuId集合
 */
export const putMemberCartBySkuIdApi = (
    skuId: string,
    data: { selected?: boolean; count?: number },
) => {
    return http({
        method: 'PUT',
        url: `/member/cart/${skuId}`,
        data,
    })
}

/**
 * 购物车全选/取消全选
 * @param data selected 是否全选中
 * @returns 
 */
export const putMemberCartSelectedApi = (data: { selected: boolean }) => {
    return http({
        method: 'PUT',
        url: '/member/cart/selected',
        data,
    })
}
