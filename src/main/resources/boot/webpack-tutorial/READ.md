# Webpack引导
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