//birthday.js
const util = require('../../utils/util.js')
Page({
  data: {
    date: '2018-07-18',
  },
  onLoad: function () {
    var time = util.formatTime(new Date()) 
    time =time.slice(0,10); 
    console.log(time)  
    this.setData({
      date:time
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
    console.log(e.detail.value)      
  },
  confirm:function(e)
  {
    var date = this.data.date;
    if (date == '2018-07-04') {
      wx.playBackgroundAudio({
        dataUrl: 'http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201501/5371.mp3',
        success: function (res) {
          setTimeout(function () {
            wx.redirectTo({
              url: '../rose/rose'
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
