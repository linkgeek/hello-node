# NPM命令

## Build Setup

```bash
# 下载安装node环境(安装node环境才能本地跑项目)
https://nodejs.org/zh-cn/(下载后安装即可)

# 新建项目
node

# 进入项目目录
cd node

# 初始化
npm init

# 安装依赖
npm install
npm install jquery

# 卸载包
npm uninstall jquery

# 更新包
npm update jquery

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```


## 目录结构


## 发布

```bash
# 构建测试环境
npm run build:test

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```
