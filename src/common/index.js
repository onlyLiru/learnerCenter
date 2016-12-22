import React from 'react'
import { Carousel,Grid } from 'antd-mobile';
class ImgScroll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img:[
				'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
			]
		};
	}
	render() {
		let imgHtml=this.state.img.map( (d)=> {
			return <div className="item">
				<img className="autoImg" src={d} />
			</div>;
		} );
		return (<div>
			<Carousel className="my-carousel">
				{imgHtml}
			</Carousel>

		</div>)
	}
	componentWillMount() {
		
	}
}
class GridImgNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			img:[
				'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
			]
		};
	}
	render() {
		const data = Array.from(new Array(9)).map((_val, i) => ({
		  icon: 'http://img.fancyedu.com/sys/ic/operation/1482377109011_DK.png',
		  text: `名字${i}`,
		}));
		const data1 = [
			'http://img.fancyedu.com/sys/ic/operation/1482377101789_dili.png',
			'http://img.fancyedu.com/sys/ic/operation/1482377101789_dili.png',
			'http://img.fancyedu.com/sys/ic/operation/1482377109011_DK.png',
			'http://img.fancyedu.com/sys/ic/operation/1482377109011_DK.png',
		];
		const abject=[{
			img:'http://img.fancyedu.com/sys/ic/operation/1482377101789_dili.png',
			link:'http://www.baidu.com'
		},{
			img:'http://img.fancyedu.com/sys/ic/operation/1482377109011_DK.png',
			link:'http://www.baidu.com'
		},{
			img:'http://img.fancyedu.com/sys/ic/operation/1482377101789_dili.png',
			link:'http://www.baidu.com'
		}]
		// const data2 = Array.from(abject).map(
		// 		(_val,i) => _val
		// 	);
		console.log(abject);
		return (<div>
			<Grid data={abject} 
				columnNum={2} 
				hasLine={false}
				isCarousel
				carouselMaxRow={1}
		        renderItem={(dataItem, index) => (
					<div style={{ 
						background: '#f00',
						marginRight: '0.2rem',
						textAlign: 'center' 
					}}>
			            <img src={dataItem.img} style={{ 
			            	marginLeft: '0.2rem',
			            	width: '100%', 
			            }} />
		        	</div>
		        )}
		    />
		</div>)
	}
	componentWillMount() {
		
	}
}
module.exports=React.createClass({
	render:function(){
		return (<div>
			<ImgScroll />
			<GridImgNav />
		</div>)
	}
});