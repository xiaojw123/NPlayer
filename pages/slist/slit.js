// pages/slist/slit.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: "https://music.niubishanshan.top/api/v2/music/",
    updateTime: "",
    topPic: "",
    listName:"",
    songList: []



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const _this = this
    const url = this.data.baseUrl + "songList/"
    console.log("onlOad options__" + options.id)
    wx.request({
      url: url + options.id,
      success: function(res) {
        console.log(res.data)
        const dataJson = res.data.data
        _this.setData({

          updateTime: dataJson.updateTime,
          topPic: dataJson.topInfo.picAlbum,
          listName:dataJson.topInfo.listName,
          songList: dataJson.songList
        })
        wx.setNavigationBarTitle({
          title: _this.data.listName
        })



      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
 

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})