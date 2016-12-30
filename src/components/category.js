import React from 'react'
import { Link } from 'react-router'
import { Carousel,Grid, WhiteSpace, Icon } from 'antd-mobile';
import { Title } from './global.js';
/*banner轮播图*/
class ImgScroll extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		let imgHtml=this.props.data.map( (d,i)=> {
			return <div key={i} className="item">
				<a onClick={ ()=>{ location.href=d.link } } className="block" href={d.link}><img className="autoImg" src={d.img} /></a>
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
};
/*商品列表*/
class GoodsList extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			
		}
	}
	html () {
		const html=this.props.data.map((d,i) => {
			const title=<Title classProps={d.title.className} name={d.title.name} />;
			const goodsHtml=<Grid columnNum={2} data={d.goods} hasLine={false}
		        renderItem={(dataItem, index) => (
					<div style={{ 
						padding:'.1rem',
						textAlign: 'center' 
					}}>
			            <a className="block" href={dataItem.link}><img src={dataItem.img} style={{ 
			            	margin: '0',
			            	width: '100%', 
			            }} /></a>
			            <div style={{marginBottom:'.2rem'}}>
                          <p>{dataItem.text}</p>
                          <div className="colorRed">25.00</div>
                        </div>
		        	</div>
		        )}
			/>;
			const banner = d.banner.img ? <a className="block" href={d.banner.link}><img className="autoImg" src="http://img.fancyedu.com/sys/ic/operation/1482377094829_banner2.png" /></a> : '';
			return (<div key={i}>
				{ title }
				{ goodsHtml }
				{ banner }
			</div>)
		});
		return html;
	}
	render() {
		return (<div className="bgColorWhite overflowHidden">
			{ this.html() }
		</div>);
	}
};

const CategoryComponent= React.createClass({
	getInitialState:function(){
		return {
			data:{
				banner:[
						{
							img:'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
							link:'/rct/disney'
						}
					],
				
				goodsList:[{
						goods:[
							{
								img:'http://img.fancyedu.com/sys/ic/operation/1482377124086_s1.png',
								link:'http://mall.fancyedu.com/goods/detail.html?goodsId=10000013612',
								text:'岁以上0-3岁'
							},{
								img:'http://img.fancyedu.com/sys/ic/operation/1482377124086_s1.png',
								link:'http://mall.fancyedu.com/goods/detail.html?goodsId=10000013612',
								text:'岁以上0-3岁'
							}
						],
						banner:{
							img:'http://img.fancyedu.com/sys/ic/operation/1482377094829_banner2.png',
							link:'disney'
						},
						title:{
							name:'热门推荐',
							className:'title blue'
						}
					},{
						goods:[
							{
								img:'http://img.fancyedu.com/sys/ic/operation/1482377124086_s1.png',
								link:'http://mall.fancyedu.com/goods/detail.html?goodsId=10000013612',
								text:'岁以上0-3岁'
							},{
								img:'http://img.fancyedu.com/sys/ic/operation/1482377124086_s1.png',
								link:'http://mall.fancyedu.com/goods/detail.html?goodsId=10000013612',
								text:'岁以上0-3岁'
							}
						],
						banner:{
							img:''
						},
						title:{
							name:'幼儿绘本',
							className:'title green'
						}
					}]
			}
		}
	},
	render:function(){
		return (<div>
			<ImgScroll data={this.state.data.banner} />
			<GoodsList data={this.state.data.goodsList} />
		</div>)
	}
});

export { CategoryComponent };


