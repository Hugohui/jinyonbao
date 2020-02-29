import { wxGet, wxPost } from '@/utils/request'

// 小麦圈服务端域名
// const api = "http://127.0.0.1:8080/"
const api = "https://projectionnetwork.com/"

// 登录
const Login = (params) => wxGet(params, api + 'user/login')

// 获取商品列表
const getGoodsList = (params) => wxGet(params, api + 'goods/list');

// 获取商品详情
const getGoodsDetail = (params) => wxGet(params, api + 'goods/detail')

// 获取拼多多推广信息
const getPddPromoteInfo = (params) => wxGet(params, api + 'goods/pdd_promote_info')

// 生成推广位
const generatePid = (params) => wxGet(params, api + 'goods/generate_pid')

// 多多进宝主题列表
const themeList = (params) => wxGet(params, api + 'goods/theme_list')

// 多多进宝主题商品查询
const getThemeGoodsList = (params) => wxGet(params, api + 'goods/theme_goods')

export default {
    Login,
    getGoodsList,
    getGoodsDetail,
    getPddPromoteInfo,
    generatePid,
    themeList,
    getThemeGoodsList
}