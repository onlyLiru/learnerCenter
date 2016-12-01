import React from 'react';
require('../css/footer.scss');

module.exports=React.createClass({
	render:function(){
		return (
			<div className="footer">
				<div className="maxW uk-flex uk-flex-space-between">
					<div>
						<span className="uk-text-bold">合作伙伴:</span> 
						<img src="http://img.fancyedu.com/sys/ic/operation/1474515842840_l1.png" />
						<img src="http://img.fancyedu.com/sys/ic/operation/1474516088718_ll1.png" />
					</div>
					<div>
						<a className="uk-margin-right">Copyright@2016 凡学教育</a>
						<a className="uk-margin-right">All Rights Reserved</a>
						<a href="http://www.miitbeian.gov.cn">沪ICP备14038198号</a>
						<a href="http://www.fancyedu.com"><img src="http://img.fancyedu.com/sys/ic/operation/1474517161277_ss.png"/></a>
					</div>
				</div>
			</div>
		)
	}
});