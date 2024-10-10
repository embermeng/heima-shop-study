import type { AddressParams, AddressItem } from '@/types/address'
import { http } from '@/utils/http'

/**
 * 添加收货地址
 * @param data 请求参数
 * @returns
 */
export const postMemberAddressApi = (data: AddressParams) => {
    return http({
        method: 'POST',
        url: '/member/address',
        data,
    })
}

/**
 * 获取收货地址列表
 */
export const getMemberAddressApi = () => {
    return http<AddressItem[]>({
        method: 'GET',
        url: '/member/address',
    })
}

/**
 * 获取收货地址详情
 * @param id 地址详情id
 * @returns
 */
export const getMemberAddressDetailApi = (id: string) => {
    return http<AddressItem>({
        method: 'GET',
        url: `/member/address/${id}`,
    })
}

/**
 * 修改收货地址
 * @param id 地址id
 * @param data 地址详情
 * @returns
 */
export const putMemberAddressDetailApi = (id: string, data: AddressParams) => {
    return http({
        method: 'PUT',
        url: `/member/address/${id}`,
        data,
    })
}

/**
 * 删除收货地址
 * @param id 地址id
 * @returns
 */
export const deleteMemberAddressApi = (id: string) => {
    return http({
        method: 'DELETE',
        url: `/member/address/${id}`,
    })
}
