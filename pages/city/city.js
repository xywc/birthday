//city.js
const util = require('../../utils/util.js')

Page({
  data: {
    cities: []
  },
  onLoad: function () {
    this.setData({
        'cities[0].name':'西安',
        'cities[0].src': 'http://i8.hexunimg.cn/2016-03-21/182880763.jpg',
        'cities[1].name': '北京',
        'cities[1].src': 'http://pic23.photophoto.cn/20120419/0033033921468983_b.jpg',
        'cities[2].name': "上海",
        'cities[2].src': 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1309/15/c3/25704968_1379219357227_mthumb.jpg',
        'cities[3].name': "深圳",
        'cities[3].src': 'http://img2.imgtn.bdimg.com/it/u=1316799658,4095109328&fm=200&gp=0.jpg',
    })
  },
  radioChange: function (e) {
    var city="西安";
    console.log(e.detail.value);
    if (e.detail.value == "西安")
    {
      wx.playBackgroundAudio({
        dataUrl: 'http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201603/7069.mp3',
        success: function (res) {
          setTimeout(function () {
            wx.redirectTo({
              url: '../school/school'
            })  
          }, 2000)         
        }
      })
    } 
    else{
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
