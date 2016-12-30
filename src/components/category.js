import React from 'react'
import { Link } from 'react-router'
import { GoodsList,ImgScroll } from './global.js';


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
								text:'岁以上0-3岁',
								price:'25.00',
							},{
								img:'http://img.fancyedu.com/sys/ic/operation/1482377124086_s1.png',
								link:'http://mall.fancyedu.com/goods/detail.html?goodsId=10000013612',
								text:'岁以上0-3岁',
								price:'25.00',
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
								text:'岁以上0-3岁',
								price:'25.00',
							},{
								img:'http://img.fancyedu.com/sys/ic/operation/1482377124086_s1.png',
								link:'http://mall.fancyedu.com/goods/detail.html?goodsId=10000013612',
								text:'岁以上0-3岁',
								price:'25.00',
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


