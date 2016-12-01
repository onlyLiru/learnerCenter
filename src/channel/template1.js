import React from 'react';

module.exports=React.createClass({
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