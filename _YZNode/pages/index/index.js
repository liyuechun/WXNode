Page({
  data:{
    // text:"这是一个页面"
    nodes: []
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数

    var that = this;
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        that.setData({nodes: res.data.data});
      }
    })  
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})