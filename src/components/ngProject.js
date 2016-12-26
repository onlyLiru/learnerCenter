import React from 'react';
import { SegmentedControl, WingBlank } from 'antd-mobile'

class Img extends React.Component{
	render() {
		const data = this.props.data;
		const html=data.map((d,i) => {
			return <a key={i} className="block autoImg" href={d.link} >
						<img src={d.img} />
					</a>
		});
		return (<div>{ html }</div>);
	}
}

const NgProject= React.createClass({

	getInitialState:function() {
		const id =parseInt(this.props.location.query.id);
		return {
			curIndex:id,
			data: {
				ngkids:{
					topImg:[{
						img:'http://img.fancyedu.com/sys/ic/operation/1482724922513_dd.jpg',
						link:'disney'
					}]
				},
				ourWorld:{
					topImg:[{
						img:'http://img.fancyedu.com/sys/ic/operation/1482724979742_OUR WOLRD.jpg',
						link:'disney'
					}]
				},
				science:{
					topImg:[{
						img:'http://img.fancyedu.com/sys/ic/operation/1482724988266_Science.jpg',
						link:'disney'
					}]
				}
			}
		};
	},
	render:function() {
		const Tab = () => {
			return <div className="barNav" style={{padding:'.2rem .2rem 0'}}>
				<SegmentedControl
		          values={['环球少年', 'Our World', 'Science']}
		          onChange={ this.change }
		          selectedIndex={this.state.curIndex}
		          className='ngProjectTab'
		        />
			</div>
		};
		let Page = () => {
			return (<div style={{ backgroundColor:'#015080' }}>
				<Tab />
				<div className='content' style={{paddingTop:'1.2rem'}}>
					您访问的页面有无
				</div>
			</div>);
		}
		switch(this.state.curIndex){
			case 0 :
				Page = ()=> {
					return <div style={{ backgroundColor:'#015080' }}>
						<Tab />
						<div className='content' style={{paddingTop:'1.2rem'}}>
							<Img data={this.state.data.ngkids.topImg} />
						</div>
					</div>
				};
				break;
			case 1 :
				Page = ()=> { 
					return <div style={{ backgroundColor:'#015080' }}>
						<Tab />
						<div className='content' style={{paddingTop:'1.2rem'}}>
							<Img data={this.state.data.ourWorld.topImg} />
						</div>
					</div> 
				};
				break;
			case 2 :
				Page = ()=> { 
					return <div style={{ backgroundColor:'#015080' }}>
						<Tab />
						<div className='content' style={{paddingTop:'1.2rem'}}>
							<Img data={this.state.data.science.topImg} />
						</div>
					</div> 
				};
				break;
			default :
				
		}

		return <Page />;
	},
	change(e) {
		const index = e.nativeEvent.selectedSegmentIndex;
		this.setState({
			curIndex:index
		});
	},
	
});

export { NgProject };