//city.js
const util = require('../../utils/util.js')

Page({
  data: {
    names: []
  },
  onLoad: function () {
    this.setData({
        'names[0].name':'李小二',
        'names[1].name': '张小二',
        'names[2].name': "刘小二",
        'names[3].name': "王小二",
    })
  },
  radioChange: function (e) {
    console.log(e.detail.value)
    var name= "刘小二";
    if (e.detail.value == name) {
      wx.playBackgroundAudio({
        dataUrl: 'http://fjdx.sc.chinaz.com/files/download/sound1/201303/2811.mp3',
        success: function (res) {
          setTimeout(function () {
            wx.redirectTo({
              url: '../gender/gender'
            })
          }, 1000)
        }
      })
    }
    else {
      wx.showToast({
        title: '错误,返回首页',
        icon: 'error',
        duration: 1000
      })
      setTimeout(function () {
        wx.navigateBack({
          url: '../index/index'
        })
      }, 1000)
    }
  }
})
