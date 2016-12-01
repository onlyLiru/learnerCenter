import React from 'react';
require('../css/nav.scss');

module.exports=React.createClass({
	render:function(){
		return (<nav className="common-nav maxW">
				<img src="http://www.ngkidschina.com/Public/Home/images/welcome.png"/>
				<span className="topNav">
				    <a className="uk-margin-left" data-rel="index" href="index.html?page=index">首页</a>
				    <a className="uk-margin-left active" data-rel="english" href="channel.html?page=english">英语</a>
				    <a className="uk-margin-left" data-rel="stem" href="channel.html?page=stem">科学</a>
				    <a className="uk-margin-left" data-rel="art" href="channel.html?page=art">艺术</a>
				    <a className="uk-margin-left" data-rel="summerCamp" href="summerCamp.html?page=summerCamp">夏令营</a>
				    <a className="uk-margin-left" data-rel="club" href="xiaoxiaoyudujia.html?page=club">
				        俱乐部
				    </a>
				    <a className="uk-margin-left" data-rel="schools" href="schools.html?page=schools">
				        全国校区
				    </a>
				    <a className="uk-margin-left" data-rel="photography" target="_blank" href="photography.html?page=photography">摄影</a>
				</span>	
			</nav>)
	}
});