import type { OrderPreResult } from '@/types/order'
import { http } from '@/utils/http'

/**
 * 填写订单-获取预付订单
 */
export const getMemberOrderPreApi = () => {
    return http<OrderPreResult>({
        method: 'GET',
        url: '/member/order/pre',
    })
}

/**
 * 填写订单-获取立即购买订单
 */
export const getMemberOrderPreNowApi = (data: {
    skuId: string,
    count: string,
    addressId?: string
}) => {
    return http<OrderPreResult>({
        method: 'GET',
        url: '/member/order/pre/now',
        data
    })
}