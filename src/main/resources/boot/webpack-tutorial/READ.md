# Webpack引导，参考https://www.webpackjs.com/guides/
>## 1.安装和起步
+ ### 根目录下，npm install -y默认初始化，生成package.json文件
+ ### webpack的安装，webpack 4+版本配合安装webpack-cli，一般不建议全局安装，以防构建失败，如require操作等，指令：npm install -g -D(--save-dev) webpack webpack-cli
+ ### 新建目录src(源)、dist(输出)，新建webpack.config.js文件
+ ### 了解webpack.config.js、package.json文件的意义，如配置项或编写内容
+ ### webpack.config.js可添加属性private:true，防止意外发布私有存储库
+ ### 指令npx webpack或npm run build(映射package.json配置项scripts中的build:webpack)构建
>## 2.资源管理
+ ### webpack.config.js添加规则(module:rules[...])，引导资源
>## 3.输出管理
+ ### 插件html-webpack-plugin、clean-webpack-plugin的作用及配置
>## 4.便捷开发
+ ### webpack.config.js配置devtool:inline-source-map，页面访问时会引导源文件，方便定位，不建议生产环境
+ ### 开发工具
    + #### webpack's Watch Mode：观察文件改动，实际效果需要刷新页面
    + #### webpack-dev-server：指令npm install --save-dev webpack-dev-server，webpack.config.js配置devServer:{contentBase:'.dist'}，在localhost:8080建立服务，package.json配置scripts添加start:webpack-dev-server --open，运行npm start,浏览器自动加载页面，修改源文件服务自动重新编译加载
    + #### webpack-dev-middle：指令npm install --save-dev express webpack-dev-middleware，webpack.config.js配置output添加publicPath:'/'，新建server.js编写服务，package.json配置scripts添加server:node server.js，运行npm run server启动服务，浏览器访问server.js中的配置，如localhost:3000，修改源文件，服务自动编译，实际效果需刷新页面
+ ### 调整文本编辑器：使用自动编译代码时，可能会在保存文件时遇到一些问题。某些编辑器具有“安全写入”功能，可能会影响重新编译
>## 5.模块热替换
+ ### 用于开发，使用webpack插件，webpack.config.js配置devServer添加hot:true，plugins添加new webpack.NamedModulesPlugin()，new webpack.HotModuleReplacementPlugin()，output不能使用chunkhash，package.json配置scripts中start可改为webpack-dev-server --hotOnly，源文件index.js写入module.hot.accept，如监听源文件print.js，运行npm start进入服务，页面访问localhost:8080，此时修改print.js，页面console有关源文件print.js相应输出，实际效果需要对应module.hot.accept的回调函数
+ ### 修改样式表，指令npm install --save-dev style-loader css-loader，webpack.config.js配置module添加对应的rules，添加styles.css，可写入更改页面背景色样式，源文件index.js引入styles.css，启动服务，访问页面，此时更改styles.css文件有关页面背景色样式，服务重新编译加载，页面立即呈现效果
>## 6.Tree Shaking
+ ### 你可以将应用程序想象成一棵树。绿色表示实际用到的源码和 library，是树上活的树叶。灰色表示无用的代码，是秋天树上枯萎的树叶。为了除去死去的树叶，你必须摇动这棵树，使它们落下
+ ### 指令webpack -p，使用UglifyJsPlugin，ES6的import、export，默认mode:production
>## 7.生产环境构建
+ ### 分别创建webpack.common.js、webpack.prod.js、webpack.dev.js配置文件，对应公共、产品、开发，写入相应操作
>## 8.代码分离
+ ### 入口起点：使用 entry 配置手动地分离代码
+ ### 防止重复：使用 CommonsChunkPlugin 去重和分离 chunk
+ ### 动态导入：通过模块的内联函数调用来分离代码
>## 9.懒加载
+ ### 懒加载或者按需加载，是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载
>## 10.缓存
+ ### 输出文件的文件名
+ ### 提取模板
+ ### 模块标识符
>## 11.创建 library
>## 12.shimming