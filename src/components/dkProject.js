import React from 'react';
import { SegmentedControl, ListView,WhiteSpace,Flex } from 'antd-mobile'

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
    	const d = data[index++];
    	return (
	        <div key={rowID}
				style={{
					padding: '0.16rem .16rem .2rem',
					marginTop:'.2rem',
					boxSizing:'border-box',
					backgroundColor: '#FEF150',
					borderRadius:'.2rem',
					width:'48%',
					float:rowID % 2 == 0 ? 'left' :'right'
				}}
	        >
				<a className="block" href={d.link}><img className="autoImg" src={d.img} /></a>
                  <WhiteSpace size='md' />
                  <Flex justify="around">
                    <Flex.Item className="line1" style={{flex:'3'}}>
                      {d.title}
                    </Flex.Item>
                    <Flex.Item className="colorRed" style={{textAlign:'right'}}>¥{d.price}</Flex.Item>
                  </Flex>
                  <WhiteSpace size='md' />
                  <a style={{
                      display:'inline-block',
                      width:'100%',
                      textAlign:'center',
                      lineHeight:'0.6rem',
                      backgroundColor:'#FF5069',
                      fontWeight:'bold',
                      fontSize:'.34rem',
                      borderRadius:'0.4rem',
                      color:'#FDFC4C',
                      boxShadow:'2px 4px #E4034C'
                    }}
                    href={d.link}
                  >立即购买</a>
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

const DkProject= React.createClass({

	getInitialState:function() {
		const id =parseInt(this.props.location.query.id);
		return {
			curIndex:id,
			bgColor:'#424785',
			data: {
				drawing:{
					topImg:[{
						img:'http://img.fancyedu.com/sys/ic/operation/1482724959997_k.jpg',
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
				},
				science:{
					topImg:[{
						img:'http://img.fancyedu.com/sys/ic/operation/1482724970053_w.jpg',
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
			},
			
		};
	},
	render:function() {
		const Tab = () => {
			return <div className="barNav" style={{padding:'.2rem .2rem 0',backgroundColor:this.state.bgColor}}>
				<SegmentedControl
		          values={['彩绘名著科普', '有趣的科学']}
		          onChange={ this.change }
		          selectedIndex={this.state.curIndex}
		          className='dkProjectTab'
		        />
			</div>
		};
		let Page = () => {
			return (<div style={{ backgroundColor:this.state.bgColor }}>
				<Tab />
				<div className='content' style={{paddingTop:'1.2rem'}}>
					您访问的页面不存在
				</div>
			</div>);
		}
		switch(this.state.curIndex){
			case 0 :
				Page = ()=> {
					return <div style={{ backgroundColor:this.state.bgColor }}>
						<Tab />
						<div className='content' style={{paddingTop:'1.2rem'}}>
							<Img data={this.state.data.drawing.topImg} />
							<div className="clearfix" style={{padding:'0 .2rem'}}>
								<GoodsList data={ this.state.data.drawing.listData } />
							</div>
						</div>
					</div>
				};
				break;
			case 1 :
				Page = ()=> { 
					return <div style={{ backgroundColor:this.state.bgColor }}>
						<Tab />
						<div className='content' style={{paddingTop:'1.2rem'}}>
							<Img data={this.state.data.science.topImg} />
							<div className="clearfix" style={{padding:'0 .2rem'}}>
								<GoodsList data={ this.state.data.science.listData } />
							</div>
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

export { DkProject };