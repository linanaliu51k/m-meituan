# 概述

这个项目后端使用koa2 + koa-router + koa-static-server，前端使用了react。

前端技术栈为
- 基础列库：react
- 路由：react-router4
- 数据管理：react-redux + redux-thunk + redux-devtool
- 样式：less + postcss

# 运行方式

## 安装nodejs7.6+
Mac：安装nvm，使用nvm安装响应版本Nodejs
Windows：Node.js官方安装最新版本

下载项目:
```
https://github.com/linanaliu51k/m-meituan.git
```
使用npm安装依赖：
```
npm install
```

## 开发环境运行方式
Node.js端：
```
npm run dev-node // 如果报错了 很可能是Node.js版本不够高
```
Borwser端：
```
npm run dev-web // 会自动打开浏览器
```

## 部署环境运行方式

编译代码：
```
npm run build-web
```

Node.js服务器：(可以使用pm2来启动)
```
npm run start-node
```

# 项目结构树
---
```
├── app # 前端目录
|   |-- api # 请求数据接口
│   │   ├── detail #获取详情页信息数据
│   │   ├── home   #首页数据
│   │   ├── search #搜索页数据
│   │   ├── user   #用户页
│   │   └── index.js #利用fetch封装的get，post
│   ├── component # 公用组件 这里一般为木偶组件，即展示组件
│   │   ├── BuyAndStore # 购买和收藏
│   │   ├── CityList    # 城市列表
│   │   ├── List        # 列表页
│   │   ├── Header      # 头部
│   │   ├── LoadMore    # 加载更多组件
│   │   └── Login ...   # 登录组件
│   ├── config # 配置文件
│   │   ├── develop.js  # 开发环境配置文件
│   │   ├── index.js
│   │   ├── localStoreKey.js  # 存在localStore中的key
│   │   └── production.js   # 上线配置文件
│   ├── container # 页面级组件
│   │   ├── City      # 城市页
│   │   ├── Detail    # 详情页
│   │   ├── Home      # 首页
│   │   ├── Login     # 登录页
│   │   ├── Search    # 搜索页
│   │   ├── User      # 个人中心页
|   |   |-- 404.jsx   # 404页面
│   │   └── index.jsx # 最外层组件 App
│   ├── redux # redux相关 包括 actions reducers store
│   │   ├── actions
│   │   │   ├── common.js  # 整个应用的公共状态
│   │   │   ├── detail.js  # 详情页的状态数据
│   │   │   ├── home.js    # 首页状态数据
│   │   │   ├── search.js  # 搜索页状态数据
│   │   │   ├── store.js   # 收藏相关的
│   │   │   └── user.js    # 用户页相关的
│   │   ├── reducers
│   │   │   ├── common.js  # 整个应用的公共状态
│   │   │   ├── detail.js  # 详情页的状态数据
│   │   │   ├── home.js    # 首页状态数据
│   │   │   ├── search.js  # 搜索页状态数据
│   │   │   ├── store.js   # 收藏相关的
│   │   │   ├── user.js    # 用户页相关的
│   │   │   └── index.js   # 将各个reducer合并.
│   │   ├── action-types.js  # 动作类型列表
│   │   └── index.jsx        # redux 入口文件
│   ├── router # 前端路由配置
│   │   └── routerMap.jsx
│   ├── static # 前端一些静态资源
│   │   ├── css
│   │   └── fonts
│   ├── util # 常用工具类库
│   │   └── localStore.js
│   ├── index.jsx #项目入口文件
│   ├── index.tmpl.html #项目所用的静态模板
|── mock     # 数据模拟
│── router   # 后端api接口
|--.babelrc  # babel的配置文件
|--server.js # 用于启动一个node服务
|-- webpack.config.js # 本地配置文件
└──webpack.production.config.js # 线上配置文件
```
# 项目所使用的模块
开发依赖模块：
- autoprefixer：postcss-loader的一个插件,使用一个数据库根据当前浏览器的普及度以及属性支持自动给你的css添加前缀前缀：[详情点这里](http://www.jianshu.com/p/f5b0b92e6b0f)
- babel-core：babel转码的核心，必须安装[bable详情点这里(阮一峰)](http://www.ruanyifeng.com/blog/2016/01/babel.html)
- babel-loader：babel加载器，配置babel编译必备
- babel-plugin-react-transform：代替react-hot-loader的插件，是基于Babel Plugin的。这是一个基本的架子，要实现热替换还要安装其他插件。
- babel-plugin-transform-decorators-legacy: 转换类的装饰.
- react-transform-hmr：安装这个才能实现热替换的功能。
- babel-preset-es2015：babel转译预设规则(转es6)
- babel-preset-react：babel转译预设规则(react的jsx)
- babel-preset-stage-0: babel转译预设规则(es7)
- cross-env: 用于跨平台来设置环境变量
- css-loader：允许引入css文件
- style-loader：为了在html中以style的方式嵌入css
- postcss-loader：一个插件平台，这里只要用其autoprefixer功能
- eslint-loader：代码规范检查[点这里](http://www.tuicool.com/articles/7JZZJzn)
- extract-text-webpack-plugin：分离css文件
- url-loader：图片与字体加载器,file-loader的上层封装,依赖file-loader
- file-loader：图片与字体加载器
- html-webpack-plugin：这样可以将输出的文件名自动注入到html中，不用我们自己手写
- json-loader：处理json文件
- less：less编译css
- less-loader：less加载器
- nodemon: 实时编译js文件.
- open-browser-webpack-plugin：打包完成自动打开浏览器的插件
- webpack：一代神器
- webpack-dev-server：一个小型的Node.js Express服务器，可实现代码修改自动[看这里](https://segmentfault.com/a/1190000006964335)

上线依赖模块：
- es6-promise：使用fetch时为了兼容老版本需要安装
- koa: node框架
- koa-bodyparser: 用来解析请求体的.
- koa-compress: 用于设置gzip压缩
- koa-cors: 用于支持允许跨域的.
- koa-router: koa的路由
- koa-static-server: 用于构建静态服务器
- react-router-dom: react路由4
- react-router-redux: 和react-router一起使用的, 路由中间件
- history: 与react-router-redux一起使用.
- redux: 全局状态中心
- react-redux: 用于连接react和redux
- redux-thunk: 用来处理异步的action的.
- immutable：react性能优化，需要学习新的API[immutable](https://zhuanlan.zhihu.com/p/20295971?columnSlug=purerender)
- react：
- react-dom:
- react-addons-css-transition-group：实现组件出现与消失的css3过渡动画[官方地址](https://facebook.github.io/react/docs/animation.html)
- react-addons-pure-render-mixin：用以替换shouldComponentUpdate，优化性能
- react-swipe：轮播图插件,引入swipe-js-iso,创建reat组件
- swipe-js-iso：基于swipe.js的一个插件
- whatwg-fetch：fetch

# todo
- 后端只是简单数据模拟，以后可以将数据存储到mongodb中.
- 实现完善的登录注册等等...
