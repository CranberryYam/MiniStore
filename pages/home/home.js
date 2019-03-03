import { homeHelper } from 'homeHelper.js';

Page({

  data: {
    imageUrl: "../../images/header.png",
    headerHeight: "200px"
  },

  onLoad: function (options) {
    // var query = wx.createSelectorQuery();
    // var that = this;

    // query.select('.header').boundingClientRect(function (rect) {
    //   console.log(rect.width)
    //   that.setData({
    //     headerHeight: rect.width * 0.5 + 'px'
    //   })
    // }).exec();
    console.log(homeHelper);
    homeHelper.changeHeaderHeight(this, 0.5);
  }

})