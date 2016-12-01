import React from 'react';
require('../css/common.scss');
require('../css/nav.scss');
require('../css/header.scss');

const T1=React.createClass({
	render:function(){
		return (
			<div className="maxW">
				<div className="uk-grid uk-grid-match uk-grid-small" data-uk-scrollspy="{cls:'uk-animation-slide-bottom', target:'> div', delay:100}" data-uk-grid-match="{target:'.uk-panel'}">
				    <div className="uk-width-2-3 uk-scrollspy-init-inview uk-scrollspy-inview uk-animation-slide-bottom" data-uk-slideset="{default: 1,animation: 'fade', autoplay:true,duration: 200}">
				        <div className="uk-slidenav-position bgcolor-yellow pd10 uk-border-rounded">
				            <ul className="uk-slideset uk-grid uk-flex-center uk-grid-width-1-1">
				                <li className="">
				                    <img className="uk-width-1-1" src="http://img.fancyedu.com/sys/ic/operation/1476409154041_english_03.jpg"/>
				                    <p>10月11-12日，美国国家地理学习英语师训会--郑州站……</p>
				                </li>
				                <li className="">
				                    <img className="uk-width-1-1" src="http://img.fancyedu.com/sys/ic/operation/1476430879955_1_03.jpg"/>
				                    <p>9月20-21日，美国国家地理学习英语师训会--北京站</p>
				                </li>
				                <li className="">
				                    <img className="uk-width-1-1" src="http://img.fancyedu.com/sys/ic/operation/1476430887401_2_03.jpg"/>
				                    <p>7月26-27日，美国国家地理学习英语师训会--上海站</p>
				                </li>
				                <li className="">
				                    <img className="uk-width-1-1" src="http://img.fancyedu.com/sys/ic/operation/1476430893632_3_03.jpg"/>
				                    <p>4月22日，美国国家地理学习Our World英语教材……</p>
				                </li>
				                <li className="uk-active">
				                    <img className="uk-width-1-1" src="http://img.fancyedu.com/sys/ic/operation/1476430899738_4_03.jpg"/>
				                    <p>4月20-21日，美国国家地理学习Our World教材……</p>
				                </li>
				                <li className="">
				                    <img className="uk-width-1-1" src="http://img.fancyedu.com/sys/ic/operation/1476430906064_5_03.jpg"/>
				                    <p>4月11-12日，美国国家地理学习英语师训会--上海站</p>
				                </li>
				            </ul>
				            <a className="uk-slidenav uk-slidenav-previous" data-uk-slideset-item="previous"></a>
				            <a href="#" className="uk-slidenav uk-slidenav-next" data-uk-slideset-item="next"></a>
				            <ul style={{marginTop:"-30px"}} className="uk-slideset-nav uk-dotnav uk-flex-right"></ul>
				        </div>
				    </div>
				    <div className="uk-width-1-3 uk-scrollspy-inview uk-animation-slide-bottom">
				        <div className="uk-border-rounded uk-margin-bottom bgcolor-white">
				            <a href="https://item.jd.com/10132419894.html">
				                <img className="uk-border-rounded" src="http://img.fancyedu.com/sys/ic/operation/1476173090790_02.png"/>
				            </a>
				        </div>
				        <div className="uk-border-rounded">
				            <img className="uk-border-rounded" src="http://img.fancyedu.com/sys/ic/operation/1476409162316_english_06.jpg"/>
				        </div>
				    </div>
				</div>
			</div>
		)
	}
});

const Nav=React.createClass({
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

const Index=React.createClass({
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
			<Nav />
			<T1/>
		</div>
	}
});

module.exports=Index;