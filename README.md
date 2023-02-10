### 1.创建vue项目
   命令：yarn create vite
   vue+ts

### 2.启动项目
   yarn 安装依赖
   yarn dev 启动命令--在package.json的scripts脚本中编写的

### 3.安装less
   yarn add less less-loader
   配置依赖-在vite.config.ts配置less全局样式

### 4.安装router
   yarn add vue-router@4
   新建view文件夹存放路由文件
   新建router文件夹和index.ts编写路由设置并导出router
   在main先导入Router在用use(Router)使用router   

### 