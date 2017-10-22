const Koa = require('koa');
const app = new Koa();
const port = 4000;
const path = require('path');
const convert = require('koa-convert');

const cors = require('koa-cors');
const serve = require('koa-static-server');
const bodyParser = require('koa-bodyparser');

let isDev = process.env.NODE_ENV === 'develop';//是否是开发环境

app.use(bodyParser()); //解析HTTP请求体
app.use(convert(cors())); //允许跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Credentials', "true");
    await next();
});
require('./router')(app); //初始化路由信息

!isDev && app.use(serve({rootDir: path.join(__dirname, './dist'), rootPath: '/'}));//线上的静态路由

app.listen(port, () => {
    console.log(`项目已经启动，监听${port}端口`);
});
