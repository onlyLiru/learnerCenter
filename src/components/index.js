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
/*乐园专享*/
class GridImgNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		return (<div className="bgColorWhite overflowHidden">
			<Title 
				classProps="title red" 
				name="乐园专享" />
			<Grid 
				className="noDot" 
				data={this.props.data} 
				columnNum={2} 
				hasLine={false}
				isCarousel
				carouselMaxRow={1}
		        renderItem={(dataItem, index) => (
					<div style={{ 
						padding:'.1rem',
						textAlign: 'center' 
					}}>
			            <a onClick={ ()=>{ location.href=dataItem.link } } className="block" href={dataItem.link}>
				            <img src={dataItem.img} style={{ 
				            	margin: '0',
				            	width: '100%', 
				            }} />
			            </a>
		        	</div>
		        )}
		    />
		</div>)
	}
};
/*图书分类*/
class GridIconNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render() {
		return (<div className="bgColorWhite overflowHidden">
			<Title classProps="title yellow" name="图书分类" />
			<Grid 
				className="noDot 
				gridIconNav" 
				data={this.props.data} 
				columnNum={5} 
				hasLine={false}
				isCarousel
				carouselMaxRow={1}
		        renderItem={(dataItem, index) => (
					<div style={{ 
						padding:'.1rem',
						textAlign: 'center' 
					}}>
						<a onClick={ ()=>{ location.href=dataItem.link } } className="block" href={dataItem.link}>
				            <img src={dataItem.img} style={{ 
				            	margin: '0',
				            	width: '60%', 
				            }} />
			            </a>
			            <div style={{  padding:'0.08rem 0 .2rem' }}>
                          <span style={{ fontSize:'0.24rem' }}>{dataItem.text}</span>
                        </div>
		        	</div>
		        )}
		    />
		</div>)
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

const Index= React.createClass({
	getInitialState:function(){
		return {
			data:{
				banner:[
						{
							img:'http://img.fancyedu.com/sys/ic/operation/1482377088291_banner1.png',
							link:'/rct/lessonDetail'
						}
					],
				gardenEnjoy:[{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377101789_dili.png',
						link:'/rct/ngProject?id=0'
					},{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377109011_DK.png',
						link:'/rct/ngProject?id=1'
					},{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377101789_dili.png',
						link:'/rct/ngProject?id=2'
					}],
				bookCategory:[{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377020458_（1）0-3.png',
						link:'/rct/category',
						text:'0-3岁'
					},{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377030007_（2）3-6.png',
						link:'/rct/category',
						text:'3-6岁'
					},{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377043590_（3）6.png',
						link:'/rct/category',
						text:'6岁以上'
					},{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377036764_（4.png',
						link:'/rct/category',
						text:'幼儿绘本'
					},{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377036764_（4.png',
						link:'/rct/category',
						text:'幼儿绘本'
					},{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377036764_（4.png',
						link:'/rct/category',
						text:'幼儿绘本'
					},{
						img:'http://img.fancyedu.com/sys/ic/operation/1482377036764_（4.png',
						link:'/rct/category',
						text:'幼儿绘本'
					}],
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
							link:'/rct/disney'
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
			<GridImgNav data={this.state.data.gardenEnjoy} />
			<WhiteSpace size="md" />
			<GridIconNav data={this.state.data.bookCategory} />
			<WhiteSpace size="md" />
			<GoodsList data={this.state.data.goodsList} />
		</div>)
	}
});

export { Index };


