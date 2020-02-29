import api from '@/api/index'

/**
 * 登录
 * @param {Object} params 登录参数
 */
const Login = (params, successCallback, failCallback) => {
    // 查看是否授权
    wx.getSetting({
        success (res){
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function(userRes) {
                wx.login({
                    success (res) {
                      if (res.code) {
                        let data = Object.assign({}, params, {code: res.code, userInfo: userRes.userInfo})
                        api.Login({
                            query: data,
                            showLoading: params.showLoading
                        }).then((response)=>{
                            if(response.data.code == 1){
                                successCallback && successCallback(response.data.data)
                            }
                        })
                      } else {
                        console.log('登录失败！' + res.errMsg)
                      }
                    }
                })
              }
            })
          }else{
            console.log('未授权！')
            failCallback && failCallback()
          }
        }
      })
}

module.exports = {
    Login
}