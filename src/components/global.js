import React from 'react';
import { Carousel,Grid, WhiteSpace, Icon } from 'antd-mobile';

function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
            callback(WebViewJavascriptBridge)
        }, false)
    }
}

function ngator(){
    var u = navigator.userAgent;
    return{
        isWeixin:(u.toLowerCase()).match(/MicroMessenger/i) == 'micromessenger',
        trident:u.indexOf('Trident') > -1,
        presto:u.indexOf('Presto') > -1, //opera内核
        webKit:u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko:u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        deskWebkit:(u.indexOf("Android") == -1 && u.indexOf("Mobile") == -1),
        mobileWebKit:!!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/) || !!u.match(/.*Mobile.*/), //是否为移动终端
        ios:!!u.match(/(i[^;]+\;(U;)? CPU.+Mac OS X)/), //ios终端
        android:u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端
        iPhone:u.indexOf('iPhone') > -1 && u.indexOf('Mac') > -1, //是否为iPhoneD
        iPad:u.indexOf('iPad') > -1, //是否iPad
        webApp:u.indexOf('Safari') == -1 //是否为App应用程序，没有头部与底部
    };
}

/*标题*/
class Title extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        return (<div>
            <h4 className={this.props.classProps}>{this.props.name}</h4>
        </div>);
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
                          <p className="line1">{dataItem.text}</p>
                          <WhiteSpace size="sm" />
                          <div className="colorRed">¥{dataItem.price}</div>
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

export { connectWebViewJavascriptBridge, ngator, Title ,GoodsList,ImgScroll }