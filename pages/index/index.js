// pages/index/index.js
Page({
  data: {
    msg:'hello world'
  },
  test: (e) => {
    console.log(e)
  },
  onLoad: () => {
    console.log('load')
  }
})