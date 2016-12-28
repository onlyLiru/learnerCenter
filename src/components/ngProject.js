import React from 'react';
import { SegmentedControl, ListView,WhiteSpace } from 'antd-mobile'

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

let index = 0;
let pageIndex = 0;

const GoodsList = React.createClass({
  getInitialState() {
	
	let NUM_ROWS = this.props.data.length;
	
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.genData = (pIndex = 0) => {
      const dataBlob = {};
      for (let i = 0; i < NUM_ROWS; i++) {
        dataBlob[i] = `row - ${i}`;
      }
      return dataBlob;
    };
    this.rData = this.genData();
    return {
      dataSource: dataSource.cloneWithRows(this.rData),
      isLoading: false,
    };
  },

  onEndReached(event) {
    // load new data
    // console.log('reach end', event);
    // this.setState({ isLoading: true });
    // setTimeout(() => {
    //   this.rData = { ...this.rData, ...this.genData(++pageIndex) };
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     isLoading: false,
    //   });
    // }, 1000);
  },
  render() {
  	let data=this.props.data;

    const row = (rowData, sectionID, rowID) => {
		if (index > data.length-1) {
			index = 0;
		}
    	const obj = data[index++];
    	return (
	        <div key={rowID}
				style={{
					padding: '0.16rem',
					backgroundColor: '#FEF150',
					borderRadius:'.2rem',
					margin:'.12rem'
				}}
	        >
				<div style={{ display: '-webkit-box', display: 'flex' }}>
					<a className="block" style={{ width:'55%', marginRight: '0.2rem' }} href={obj.link}>
						<img className="autoImg" src={obj.img} />
					</a>
					<div style={{ display: 'inline-block',width:'45%',position:'relative' }}>
						<p style={{position:'absolute',top:'0',left:'0'}} className="line3">{obj.des}</p>
						<div className="ac" style={{position:'absolute',bottom:'.2rem',left:'0',width:'100%'}}>
							<WhiteSpace size='md' />
							<span style={{ fontSize: '1.6em', color: '#FF6E27' }}>
								¥{obj.price}
							</span>
							<a style={{
							    display:'inline-block',
							    width:'100%',
							    lineHeight:'0.6rem',
							    backgroundColor:'#FF5069',
							    fontWeight:'bold',
							    fontSize:'.34rem',
							    borderRadius:'0.4rem',
							    color:'#FDFC4C',
							    boxShadow:'2px 4px #E4034C'
							  }}
							  href={obj.link}
							>立即购买</a>
						</div>
					</div>
				</div>
			</div>);
    };
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderFooter={() => <div style={{ padding: 10, textAlign: 'center' }}>
          {this.state.isLoading ? '加载中...' : '我是有底线的'}
        </div>}
        renderRow={row}
        className="am-list-noBg"
        pageSize={4}
        scrollRenderAheadDistance={500}
        scrollEventThrottle={20}
        onScroll={() => { }}
        useBodyScroll
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  },
});

const NgProject= React.createClass({

	getInitialState:function() {
		const id =parseInt(this.props.location.query.id);
		return {
			curIndex:id,
			data:{
				bgColor:'#015080',
				tabs:['环球少年', 'Our World', 'Science'],
				data:[
					{
						topImg:[{
							img:'http://img.fancyedu.com/sys/ic/operation/1482724922513_dd.jpg',
							link:'disney'
						}]
					},
					{
						topImg:[{
							img:'http://img.fancyedu.com/sys/ic/operation/1482724979742_OUR WOLRD.jpg',
							link:'disney'
						}],
						listData : [
							  {
							    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
							    title: '美国国家地理our world 英文原版绘本 level4(全9册)',
							    des: '美国国家地理our world 英文原版绘本 level4(全9册)',
							    price:'288',
							    link:'disney'
							  },
							  {
							    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
							    title: '麦当劳邀您过周末',
							    des: '不是所有的兼职汪都需要风吹日晒',
							    price:'288',
							    link:''
							  },
							  {
							    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
							    title: '食惠周',
							    des: '不是所有的兼职汪都需要风吹日晒',
							    price:'288',
							    link:'disney'
							  },
						]
					},
					{
						topImg:[{
							img:'http://img.fancyedu.com/sys/ic/operation/1482724988266_Science.jpg',
							link:'disney'
						}],
						listData : [
							  {
							    img: 'http://img.fancyedu.com/sys/ic/operation/1482725388929_OWR_G5U8_TailorCoat_CVR-1.png',
							    title: '相约酒店',
							    des: '不是所有的兼职汪都需要风吹日晒',
							    price:'288',
							    link:'disney'
							  },
							  {
							    img: 'http://img.fancyedu.com/sys/ic/operation/1482725382444_OWR_G4U9_TugOfWar_CVR_CP-1.png',
							    title: '麦当劳邀您过周末',
							    des: '不是所有的兼职汪都需要风吹日晒',
							    price:'288',
							    link:'disney'
							  },
						]
					}
				]
			}
			
		};
	},
	render:function() {
		const Tab = () => {
			return <div className="barNav" style={{padding:'.2rem .2rem 0',backgroundColor:this.state.bgColor}}>
				<SegmentedControl
		          values={['环球少年', 'Our World', 'Science']}
		          onChange={ this.change }
		          selectedIndex={this.state.curIndex}
		          className='ngProjectTab'
		        />
			</div>
		};
		let Page = () => {
			return (<div style={{ backgroundColor:this.state.data.bgColor }}>
				<Tab />
				<div className='content' style={{paddingTop:'1.2rem'}}>
					您访问的页面不存在
				</div>
			</div>);
		}
		switch(this.state.curIndex){
			case 0 :
				Page = ()=> {
					return <div style={{ backgroundColor:this.state.data.bgColor }}>
						<Tab data={this.state.data.tabs} />
						<div className='content' style={{paddingTop:'1.2rem'}}>
							<Img data={this.state.data.data[0].topImg} />
						</div>
					</div>
				};
				break;
			case 1 :
				Page = ()=> { 
					return <div style={{ backgroundColor:this.state.data.bgColor }}>
						<Tab />
						<div className='content' style={{paddingTop:'1.2rem'}}>
							<Img data={this.state.data.data[1].topImg} />
							<GoodsList data={ this.state.data.data[1].listData } />
						</div>
					</div> 
				};
				break;
			case 2 :
				Page = ()=> { 
					return <div style={{ backgroundColor:this.state.data.bgColor }}>
						<Tab />
						<div className='content' style={{paddingTop:'1.2rem'}}>
							<Img data={this.state.data.data[2].topImg} />
							<GoodsList data={ this.state.data.data[2].listData } />
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