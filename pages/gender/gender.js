//gender.js
const util = require('../../utils/util.js')

Page({
  data: {
    genders: [],
    gender: "女",
  },
  onLoad: function () {
    this.setData({
      'genders[0].name': '男',
      'genders[0].src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531833525&di=f97193277d876a17ccd8b67292213adb&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F35%2F29%2F34r58PICxyZ_1024.jpg',
      'genders[1].name': '女',
      'genders[1].src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531238652958&di=40f9e6aa3317aa7af7f266ec70240de3&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F16%2F64%2F89258PICeSD_1024.jpg',
    })
  },
  radioChange: function (e) {
    var gender = this.data.gender;
    if (e.detail.value == gender) {
      wx.playBackgroundAudio({
        dataUrl: 'http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201609/7807.mp3',
        success: function (res) {
          setTimeout(function () {
            wx.redirectTo({
              url: '../city/city'
            })
          }, 3000)
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
