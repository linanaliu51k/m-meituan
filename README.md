# 概述

这个项目后端使用koa2，前端使用了react。

前端技术栈为
- 基础列库：react
- 路由：react-router4
- 数据管理：react-redux + redux-devtool
- 样式：less + postcss

# 运行方式

## 安装nodejs7.6+
Mac：安装nvm，使用nvm安装响应版本Nodejs
Windows：Node.js官方安装最新版本

使用npm安装依赖：
npm install

## 开发环境运行方式
Node.js端：
npm run dev-node // 如果报错了 很可能是Node.js版本不够高

Borwser端：
npm run dev-web // 会自动打开浏览器

## 部署环境运行方式

编译代码：
npm run build

Node.js服务器：
npm run start

# 项目结构树
---
```
├── app # 前端目录
|   |-- actions # redux 动作
│   │   ├── store.js
│   │   └── userinfo.js
│   ├── component # 公用组件
│   │   ├── BuyAndStore
│   │   ├── CityList
│   │   ├── List
│   │   ├── Header
│   │   ├── LoadMore
│   │   └── Login ...
│   ├── config # 配置文件
│   ├── constants # redux 动作类型常量
│   ├── container # 页面级组件
│   │   ├── City
│   │   ├── Detail
│   │   ├── Home
│   │   ├── Login
│   │   ├── Search
│   │   ├── User
|   |   |-- 404.jsx
|   |   |-- index.jsx
│   │   └── wrap
│   ├── fetch # 用于请求后台接口
│   │   ├── detail
│   │   ├── home
│   │   ├── search
│   │   ├── user
│   │   ├── Search
│   │   ├── get.js
│   │   └── post.js
│   ├── reducers # redux中用于处理action的函数
│   │   ├── index.js
│   │   ├── store.js
│   │   └── userinfo.js
│   ├── router # 前端路由配置
│   │   └── routerMap.jsx
│   ├── static # 前端一些静态资源
│   │   ├── css
│   │   └── fonts
│   ├── store # redux的store仓库
│   │   └── configureStore.js
│   ├── util # 常用工具类库
│   │   └── localStore.js
│   ├── index.jsx
│   ├── index.tmpl.html
|── mock # 数据模拟
│── router # 后端api接口
|--.babelrc
|--server.js
|-- webpack.config.js
└──webpack.production.config.js
```

# todo
- 可以使用redux的中间件redux-thunk 可以用来支持异步的action，主要在action中取请求数据，以便达到复用.
- 后端只是简单数据模拟，以后可以将数据存储到mongodb中.
- 实现完善的登录注册等等...
