// pages/home/home.js

Page({
  


  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: "https://music.niubishanshan.top/api/v2/",
    recommendslider: [],
    recommendradioList: [{}],
    rankList: [{}]
  },

  gotSongList(event){
    const id = event.currentTarget.dataset.id
    console.log("goto nex page"+id)
    wx.navigateTo({
      url: '/pages/slist/slit?id='+id
    })

  },

  //获取排行榜数据
  loadRankData: function(url) {


    const rankR = this
    wx.request({
      url: url,
      success: function(res) {
        rankR.setData({
          rankList: res.data.data
        })
      }
    })
    console.log("rank:" + this.data.rankList)


  },



  loadRecommondData: function(url) {

    const current = this


    wx.request({

      url: url,

      success: function(res) {

        console.log(res)
        current.setData({
         
          recommendslider: res.data.data.slider,
          recommendradioList: res.data.data.radioList
        })



      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },

  request: function(url) {



  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    console.log("LOAD")
    const url = this.data.baseUrl + "music/recommend"
    const rankUrl = this.data.baseUrl + "music/toplist"
    this.loadRecommondData(url)
    this.loadRankData(rankUrl)
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