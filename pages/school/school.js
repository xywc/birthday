//school.js
const util = require('../../utils/util.js')

Page({
  data: {
    schools: [],
    school: "西安交通大学",
  },
  onLoad: function () {
    this.setData({
      'schools[0].name': '北京交通大学',
      'schools[0].src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531233464455&di=abb973039a0af7c97b8c7a51e4ba5201&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170222%2Fd3c1f8ba684c4c0293bb3083a758717e_th.jpeg',
      'schools[1].name': '西安交通大学',
      'schools[1].src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531233116703&di=49e1de57f2c47743f0395b3d79994e2b&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140221%2Fbki-20140221032719-1776589376.jpg',
      'schools[2].name': "国立交通大学",
      'schools[2].src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531233539115&di=4f15cadc672f73093f8df652e21877c6&imgtype=0&src=http%3A%2F%2Fphoto.hanyu.iciba.com%2Fupload%2Fencyclopedia_2%2F02%2Fdc%2Fbk_02dcd40f14abb70991a852a21bcf5e71_5L6nIj.jpg',
      'schools[3].name': "西南交通大学",
      'schools[3].src': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531233633094&di=be0df20964b95716c65140607f9e3910&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160408%2F63d8507180744815ba17bdab8eb8b173.jpg',
    })
  },
  radioChange: function (e) {
    var city = this.data.school;
    if (e.detail.value == city) {
      wx.playBackgroundAudio({
        dataUrl: 'http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201609/7807.mp3',
        success: function (res) {
          setTimeout(function () {
            wx.redirectTo({
              url: '../birthday/birthday'
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
