import { useMemberStore } from "@/stores"

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
    // 请求拦截
    invoke(options: UniApp.RequestOptions) {
        // 1. 拼接地址
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        // 2. 请求超时，默认60s
        options.timeout = 60 * 1000
        // 3. 添加小程序端请求头标识
        options.header = {
            ...options.header,
            'source-client': 'miniapp'
        }
        // 4. 添加token请求头标识
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        if (token) {
            options.header.Authorization = token
        }
    }
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

// 定义一个接受泛型的接口，里面的result是泛型的类型
interface Data<T> {
    code: string,
    msg: string,
    result: T
}

// 封装请求函数，http接受一个泛型
export const http = <T>(options: UniApp.RequestOptions) => {
    // 1. 返回Promise对象
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            // 2. 服务器有响应的回调
            success(res) {
                const statusCode = res.statusCode
                // 状态码2xx，axios就是这样设计的
                if (statusCode >= 200 && statusCode < 300) {
                    // 2.1 提取核心数据res.data，使用类型断言
                    // resolve(<Data<T>>res.data)
                    resolve(res.data as Data<T>)
                } else if (statusCode === 401) {
                    // 401 -> 没有token，清理用户信息，跳转到登录页
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({ url: '/pages/login/login' })
                    reject(res)
                } else {
                    // 其他错误 -> 根据后端错误信息提示
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg || '请求错误'
                    })
                    reject(res)
                }
            },
            // 3. 响应失败————网络错误
            fail(err) {
                uni.showToast({
                    title: '网络错误，换个网络试试',
                    icon: 'none',
                })
                reject(err)
            }
        })
    })
}