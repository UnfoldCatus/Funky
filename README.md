# Funky
Functional Reactive Structure

## react-server:

  使用Koa.js [http://koajs.com]
  作为转发层服务器。用react作为html渲染器
  金色百年的八个模块分别对应八个服务端渲染模块


  client input url-\> some component -\>
  renderToString -\> stream to client



## 目录结构

	|- assets
	  |- script (dest)
	     |- modules
	      some.js
	  |- styles
	  |- images
	|- components
	 some.jsx
	|- views
	  layout.html
	  |- modules
	   some.html
	|- src

### 每个组件component 头部都有结构注释请仔细查看
### 组件命名采用如下规则
  1. 首字母一缕大写
  2. 不可复用的子组件命名应该可以很清晰的看出和父组件的关系
	如：
		HotelList
		  HotelListFilter
		  List
		ListItem

   这些都是可以一看就明白的从属关系 再结合注释的组件结构。 就能给维护人员清晰的思路

### 每个组件的方法书写规范顺序为
  1. render
  2. propTypes
  3. getDefaultProps
  4. getInitialState
  5. private methods
  6. components life cycle



### 部署方式
1. 开发
`npm start`


2. pm2部署运行 (首先你要安装pm2)
`nvm use 5.6.0`
`npm install`
`npm update --save`
`npm update --save-dev`
`pm2 start pm2-deploy --env production`
