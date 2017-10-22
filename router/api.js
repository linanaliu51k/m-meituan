const path = require('path');

module.exports = (router) => {

    // 首页 —— 广告（超值特惠）
    var homeAdData = require(path.resolve(__dirname, '../mock/home/ad.js'))
    router.get('/api/homead', async (ctx, next) => {
        console.log('首页 —— 广告（超值特惠）')

        ctx.body = homeAdData
    });

    // 首页 —— 推荐列表（猜你喜欢）
    var homeListData = require(path.resolve(__dirname, '../mock/home/list.js'));
    router.get('/api/homelist/:city/:page', async (ctx, next) => {
        console.log('首页 —— 推荐列表（猜你喜欢）')

        // 参数
        const params = ctx.params;
        const paramsCity = params.city
        const paramsPage = params.page

        console.log('当前城市：' + paramsCity)
        console.log('当前页数：' + paramsPage)

        ctx.body = homeListData
    });

    // 搜索结果页 - 搜索结果 - 三个参数
    var searchListData = require(path.resolve(__dirname, '../mock/search/list.js'))
    router.get('/api/search/:page/:city/:category/:keyword', async (ctx, next) => {
        console.log('搜索结果页 - 搜索结果')

        // 参数
        const params = ctx.params;
        const paramsPage = params.page
        const paramsCity = params.city
        const paramsCategory = params.category
        const paramsKeyword = params.keyword

        console.log('当前页数：' + paramsPage)
        console.log('当前城市：' + paramsCity)
        console.log('当前类别：' + paramsCategory)
        console.log('关键字：' + paramsKeyword)

        ctx.body = searchListData
    })
    // 搜索结果页 - 搜索结果 - 两个参数
    router.get('/api/search/:page/:city/:category', async (ctx, next) => {
        console.log('搜索结果页 - 搜索结果')

        // 参数
        const params = ctx.params;
        const paramsPage = params.page
        const paramsCity = params.city
        const paramsCategory = params.category

        console.log('当前页数：' + paramsPage)
        console.log('当前城市：' + paramsCity)
        console.log('当前类别：' + paramsCategory)

        ctx.body = searchListData
    })

    // 详情页 - 商户信息
    const detailInfo = require(path.resolve(__dirname, '../mock/detail/info.js'))
    router.get('/api/detail/info/:id', async (ctx, next) => {
        console.log('详情页 - 商户信息')

        const params = ctx.params;
        const id = params.id

        console.log('商户id: ' + id)

        ctx.body = detailInfo
    })
    // 详情页 - 用户评论
    const detailComment = require(path.resolve(__dirname, '../mock/detail/comment.js'))
    router.get('/api/detail/comment/:page/:id', async (ctx, next) => {
        console.log('详情页 - 用户点评')

        const params = ctx.params;
        const page = params.page
        const id = params.id

        console.log('商户id: ' + id)
        console.log('当前页数: ' + page)

        ctx.body = detailComment
    })

    // 订单列表
    const orderList = require(path.resolve(__dirname, '../mock/orderlist/orderList.js'))
    router.get('/api/orderlist/:username', async (ctx, next) => {
        console.log('订单列表')

        const params = ctx.params;
        const username = params.username
        console.log('用户名：' + username)

        ctx.body = orderList
    })

    // 提交评论
    router.post('/api/submitComment', async (ctx, next) => {
        console.log('提交评论')
        // 获取参数

        ctx.body = {
            errno: 0,
            msg: 'ok'
        }
    })
}
