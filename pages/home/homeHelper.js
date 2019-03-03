class HomeHelper {

  changeHeaderHeight(that, radio) {
    var query = wx.createSelectorQuery();

    query.select('.header').boundingClientRect(function (rect) {
      console.log(rect.width)
      that.setData({
        headerHeight: rect.width * radio + 'px'
      })
    }).exec();
  }

}

module.exports = {
  homeHelper: new HomeHelper(),
}