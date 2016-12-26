import React from 'react';
import { Result } from 'antd-mobile';

module.exports = React.createClass({
	render:function(){
		return <div>
			<Result
			    imgUrl="https://zos.alipayobjects.com/rmsportal/LUIUWjyMDWctQTf.png"
			    title="您访问的页面不存在!"
			    message="url地址输入有误"
			/>
		</div>
	}
});