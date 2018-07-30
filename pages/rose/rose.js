//rose.js
Page({
  data: {
    motto: 'Happy Birthday',
    setInter: '', 
  },
  //事件处理函数
  onLoad: function () {
    wx.playBackgroundAudio({
      dataUrl: 'http://sc1.111ttt.cn/2016/1/09/09/202091618432.mp3',
      success: function (res) {
      }
    })
  },
  
  onReady: function (e) {
    var that = this;
    //使用wx.createContext获取绘图上下文context
    var width,height;
    wx.getSystemInfo({
      success: function (res) {
        width = res.windowWidth;
        height = res.windowHeight;
        console.log(res.windowWidth + "*" + res.windowHeight)
      }
    })
    var context = wx.createCanvasContext('Canvas');
    var f,h,x,y,z,s,q;
    context.width = context.height = f=1.4*width;
    h = -height/2.8;
    function p(a, b, c) {
      var o,w,j,n;
      if (c > 60) return [Math.sin(a*7)*(13+5/(.2+Math.pow(b*4,4))) - Math.sin(b)*50, b*f+50,625+Math.cos(a*7)*(13+5/(.2+Math.pow(b*4, 4)))+b*400,a*1-b/2,a];
      var A = a* 2 - 1;
      var B = b * 2 - 1;
      if (A * A + B * B < 1) {
        if (c > 37) {
          n = (j = c & 1) ? 6 : 4;
          o = .5 / (a + .01) + Math.cos(b * 125) * 3 - a * 300;
          w = b * h;
          return [o * Math.cos(n) + w * Math.sin(n) + j * 610 - 390, o * Math.sin(n) - w *Math.cos(n) + 550 - j * 350, 1180 + Math.cos(B + A) * 99 - j * 300, .4 - a * .1 + Math.pow(1 - B * B, -h * 6) * .15 - a * b * .4 +Math.cos(a + b) / 5 +Math.pow(Math.cos((o * (a + 1) + (B > 0 ? w : -w)) / 25), 30) * .1 * (1 - B * B), o / 1e3 + .7 - o * w * 3e-6]
        }
        if (c > 32) {
          c = c * 1.16 - .15;
          o = a * 45 - 20;
          w = b * b * h;
          z = o * Math.sin(c) + w *Math.cos(c) + 620;
          return [o*Math.cos(c) - w * Math.sin(c), 28 +Math.cos(B * .5) * 99 - b * b * b * 60 - z / 2 - h, z, (b * b * .3 + Math.pow((1 - (A * A)), 7) * .15 + .3) * b, b * .7]
        }
        o = A * (2 - b) * (80 - c * 2);
        w = 99 - Math.cos(A) * 120 - Math.cos(b) * (-h - c * 4.9) + Math.cos(Math.pow(1 - b, 7)) * 50 + c * 2;
        z = o *Math.sin(c) + w *Math.cos(c) + 700;
        return [o*Math.cos(c)-w*Math.sin(c),B*99-Math.cos(Math.pow(b,7))*50-c/3-z/1.35+450,z,(1-b/1.2)*.9+a*.1,Math.pow((1 - b),20)/4+.05]
      }
    }
    that.data.setInter = setInterval(
      function () {
        for (var i = 0; i < 5e3; i++) {
          if (s = p(Math.random(), Math.random(), i % 46 / .74)) {
            z = s[2];
            x = ~~(s[0] * f / z - h);
            y = ~~(s[1] * f / z - h);
            if (!(q = y * f + x) | q > z)
              q = z;
            context.fillStyle = "rgb(" + ~(s[3] * h) + "," + ~(s[4] * h) + "," + ~(s[3] * s[3] * -80) + ")";
            context.fillRect(x, y, 1, 1);
          }
        }
        wx.drawCanvas({
          canvasId: 'Canvas',
          actions: context.getActions(),
          reserve: true
        })
      }, 500);
    setTimeout(function(){
      clearInterval(that.data.setInter)
    },20000)
  },
  onUnload: function () {
    var that = this;
    //清除计时器  即清除
    console.log("onUnload");
    clearInterval(that.data.setInter);
    wx.getBackgroundAudioManager().stop();
  },
  onHide: function () {
    var that = this;
    //清除计时器  即清除
    console.log("onHide");
    clearInterval(that.data.setInter);
    wx.getBackgroundAudioManager().stop();
  },
})

