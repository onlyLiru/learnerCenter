import React from 'react';
require('../css/header.scss');

module.exports=React.createClass({
	render:function(){
		return <div>
			<header className="common-header">
				<div className="maxW uk-flex uk-flex-space-between">
					<div className="logo">
						<h1>logo</h1>
						<span>环球少年 • 学习体验中心</span>
					</div>
					<div className="right">
						<span className="uk-text-small">CARE THE PLANET, DARE TO EXPLORE</span>
						<h2 className="uk-margin-remove">关爱地球，勇于探索</h2>
					</div>
				</div>
			</header>
		</div>
	}
});