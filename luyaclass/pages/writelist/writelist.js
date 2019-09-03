let {
  writeList
} = require('../../api/req');
Page({
  data: {
    list: [],
    havadata: true,
    currentPage: 1, //分页页码    
  },
  onLoad(options) {
    this.getList()
  },
  onShow() {

  },
  getList() {
    let data = {
      currentPage: 1,
      pageSize: 10
    }
    writeList(data).then(res => {
      // let data = res.data

      // console.log('首页list数据----------')
      // console.log(data)

      // // 给数据列表的coverImg拼接压缩图片的代码
      // if (data.items.length > 0) {
      //   data.items.forEach((items, index) => {
      //     items.coverImg = items.coverImg + '?x-oss-process=image/resize,p_50'
      //   })
      // }
      // console.log('拼接后的首页list***')
      // console.log(data)

      let bool = res.data.currentPage * 10 < res.data.totalNum ? true : false;
      // console.log(res.data)
      this.setData({
        list: res.data.items,
        havadata: bool,
      })
    })
  },
  gotitlelist(e) {
    let id = e.currentTarget.dataset.uid;
    wx.navigateTo({
      url: '../../pages/writelist/titlelist?uid=' + id
    });
  },
  onReachBottom() {

    let page = this.data.currentPage + 1;
    if (this.data.havadata && page < 11) {
      let data = {
        currentPage: page,
        pageSize: 10
      };
      let list = this.data.list;
      writeList(data).then(res => {
        let bool = res.data.currentPage * 10 < res.data.totalNum ? true : false;
        list.push.apply(list, res.data.items);
        this.setData({
          list: list,
          havadata: bool,
          currentPage: page,
        })
      })

    }
  }
})