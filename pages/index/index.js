//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },

  onReady:function(){
      
      //存入数据-同步操作
      wx.setStorageSync("key-公众号","value-全栈工程师")

      //获取数据-同步操作
      var v = wx.getStorageSync('key-公众号')
      console.log('key:'+v)
   
      //存入数据-异步操作
      wx.setStorage({
          key: 'key-异步key',
          data: 'vale-异步value',
          success:function(){
              wx.showModal({
                  title:'消息提示',
                  content:'异步存入缓存',
                  confirmText:'知道了',
                  showCancel:false
              })
          }
      })

    //获取数据-异步操作
     wx.getStorage({
          key:'key-公众号',
          success:function(res){
              console.info(res.data)
          }
      })

     //清除本地所有缓存
     //wx.clearStorage() 

    //获取缓存信息
     wx.getStorageInfo({
         success: function(res) {
             console.log(res.keys)
             console.log(res.currentSize)
             console.log(res.limitSize)

             for(var x  in res.keys){
                 console.log('array:'+x)
             }
         }
     })
  }
})
