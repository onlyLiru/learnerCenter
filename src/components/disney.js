import React from 'react'
import { Flex, WhiteSpace } from 'antd-mobile';

class TopImg extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    return (<div>
      {this.props.data.map((d,i) => {
        return <a key={i} className="block" href={d.link}><img className="autoImg" src={d.img} /></a>
      })}
    </div>);
  }
}

class BottomImg extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    return (<div>
      {this.props.data.map((d,i) => {
        return <a key={i} className="block" href={d.link}><img className="autoImg" src={d.img} /></a>
      })}
    </div>);
  }
}


class List extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    const Style={
      backgroundColor: '#FEF150',
      borderRadius:'0.2rem',
      marginBottom:'10px',
      textAlign: 'center',
      minHeight: '3rem',
      width: '49%',
    };
    return (<div>
        <Flex wrap="wrap"
          justify="between"
          className="pd10"
        >
          { this.props.data.map( (d,i) => {
            return <div 
                key={i} 
                style={Style}
              >
                <div style={{ padding:'0.2rem 0.3rem' }}>
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
                </div>
              </div>
          }) }
        </Flex>
    </div>)
  }
};

const Disney=React.createClass({
  render() {
    return (<div style={{backgroundColor:this.state.bgColor}} >
        <TopImg data={this.state.topImg} />
        <List data={this.state.list} />
        <BottomImg data={this.state.bottomImg} />
    </div>)
  },
  getInitialState:function(){
    return {
      bgColor:'#550091',
      list:[{
          img:'http://img.fancyedu.com/sys/ic/operation/1482725184336_d2.png',
          title:'冰雪奇缘',
          price:'25',
          link:'http://www.baidu.com'
        },{
          img:'http://img.fancyedu.com/sys/ic/operation/1482725285110_d21.png',
          title:'赛车总动员赛车总动员',
          price:'25',
          link:'http://www.baidu.com'
        },{
          img:'http://img.fancyedu.com/sys/ic/operation/1482725361633_dd3.png',
          title:'头脑特工队',
          price:'25',
          link:'http://www.baidu.com'
        }],
      topImg:[{
        img:'http://img.fancyedu.com/sys/ic/operation/1482724904426_d.png',
        link:'http://www.sina.com'
      }],
      bottomImg:[{
        img:'http://img.fancyedu.com/sys/ic/operation/1482724948749_f.png',
        link:'http://www.sina.com'
      }]
    }
  }
});



export { Disney };

// module.exports=React.createClass({
// 	render () {
//     return (<div style={{backgroundColor:'#550091'}} className="pd10">
//         <Flex wrap="wrap" justify="between">
//           <PlaceHolder className="inline" />
//           <PlaceHolder className="inline" />
//           <PlaceHolder className="inline" />
//           <PlaceHolder className="inline" />
//           <PlaceHolder className="inline" />
//           <PlaceHolder className="inline" />
//           <PlaceHolder className="inline" />
//         </Flex>
//         <WhiteSpace size="lg" />
//     </div>)
//   }
// });