import { http } from '@/utils/http'

/**
 * 获取微信支付参数
 * @param data 订单id
 */
export const getPayWxPayMiniPayApi = (data: { orderId: string }) => {
    return http<WechatMiniprogram.RequestPaymentOption>({
        method: 'GET',
        url: '/pay/wxPay/miniPay',
        data
    })
}

/**
 * 模拟支付-内测版
 * @param data 订单id
 */
export const getPayMockApi = (data: { orderId: string }) => {
    return http<WechatMiniprogram.RequestPaymentOption>({
        method: 'GET',
        url: '/pay/mock',
        data
    })
}