import wepy from 'wepy';
import md5 from './md5'
import util from './util'

const client_secret = 'b9fda52a15d97abe07d9047f2a0e69847e4c7bac'
const client_id = '808aabe9aac748f3a84e58afdb13a8be'

const wxGet = async(params = {}, url) => {
    if(params.showLoading){
        wepy.showLoading({
            title: '加载中',
        })
    }

    let data = params.query || {};
    data.client_id = client_id
    data.timestamp = parseInt(Date.now() / 1000)
    const dataTs = util.objectConnectKeyValue(data)

    const SIGN = md5.hex_md5(client_secret + dataTs + client_secret).toUpperCase()
    data.sign = SIGN
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: { 'Content-Type': 'application/json'}
    });
    if (params.showLoading) {
        wepy.hideLoading()
    }
    return res;
};

const wxPost = async(params = {}, url) => {
    if(params.showLoading){
        wepy.showLoading({
            title: '加载中',
        })
    }
    let data = params.post || {};

    let res = await wepy.request({
        url: url,
        method: 'post',
        data: data,
        header: {'content-type':'application/json'}
    });
    if (params.showLoading) {
        wepy.hideLoading()
    }
    return res;
};

module.exports = {
    wxGet,
    wxPost
}
