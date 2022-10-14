// 接口请求写入的文件
import axios from './axios'

export const getMenu = (param) => {
    return axios.request({
        url: '/permission/getMenu',   //接口的相关地址
        method: 'post',               //请求方式
        data: param                   //传入的参数
    })
}

export const getData = () => {
    return axios.request({
        url: '/home/getData',
        method: 'get'
    })
}

export const getUser = (params) => {
    return axios.request({
        url: '/user/getUser',
        method: 'get',
        params
    })
}
