import React from 'react';

const ImgList= React.createClass({
	getInitialState:function()
	{
		return {
			banner:[
				{
					img:'http://img.fancyedu.com/sys/ic/operation/1482903441160_fcHappey_01.png',
					link:''
				},
				{
					img:'http://img.fancyedu.com/sys/ic/operation/1482903449641_fcHappey_02.png',
					link:''
				},
				{
					img:'http://img.fancyedu.com/sys/ic/operation/1482903456949_fcHappey_03.png',
					link:'rct/lessonDetail'
				},
				{
					img:'http://img.fancyedu.com/sys/ic/operation/1482903464263_fcHappey_04.png',
					link:'rct/lessonDetail'
				},
				{
					img:'http://img.fancyedu.com/sys/ic/operation/1482903472246_fcHappey_05.jpg',
					link:'rct/lessonDetail'
				}
			],
		}
	},
	render:function(){
		return (<div>
			{ this.state.banner.map((d,i)=>{
				return <a href={ d.link ? d.link : 'javascript:' } key={i} className="block"><img className="autoImg" src={d.img} /></a>
			}) }
		</div>)
	}
});

export { ImgList };