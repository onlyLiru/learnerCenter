require('../css/common.scss');
import React from 'react';
import { List, InputItem, WhiteSpace, Switch, Button, DatePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('1940-01-01 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
const minTime = moment('00:30 +0800', 'HH:mm Z').utcOffset(8);

const gmtNow = moment().utcOffset(0);

let Form =React.createClass({
	render:function(){
		const { getFieldProps, getFieldError } = this.props.form;
	    return (<div>
	    	<List>
	    		<InputItem
	    			placeholder="请输入姓名"
	    			{...getFieldProps('inputClear')}>
	    			姓名
	    		</InputItem>
	    		<DatePicker
		        	mode="date"
		        	title="选择日期"
		        	extra="请输入生日"
		        	{...getFieldProps('date1', {
		            
		        	})}
		        	minDate={minDate}
          			maxDate={zhNow}
		        >
	    			<List.Item arrow="horizontal">出生日期</List.Item>
	    		</DatePicker>
	    		<InputItem
	    			extra={<img src="http://img.fancyedu.com/sys/ic/operation/1481770810992_1.png" />}
			        {...getFieldProps('inputClear')}>
			        本人照片
			    </InputItem>
	    	</List>
	    	<WhiteSpace size="sm" />
	    	<List>
	    		<InputItem 
	    			{...getFieldProps('label8')}
			        labelNumber={6}>
	    			到意大利时间
	    		</InputItem>
	    		<InputItem>
        			所在城市
        		</InputItem>
	    		<List.Item
		          extra={<Switch
		            {...getFieldProps('Switch1', {
		              initialValue: true,
		              valuePropName: 'checked',
		            })}
		          />}
		        >是否在读语言学校</List.Item>
		        <InputItem>
        			报考院校
        		</InputItem>
        		<InputItem>
        			专业
        		</InputItem>
	    	</List>
	    	<WhiteSpace size="sm" />
	    	<List>
	    		<InputItem>
	    			提交作品
	    		</InputItem>
	    		<InputItem>
        			联系方式
        		</InputItem>
	    	</List>
	    	<WhiteSpace size="lg" />
	    	<Button type="primary">体验课程</Button>
	    </div>)
	}
});

Form=createForm()(Form);

module.exports=React.createClass({
	render:function(){
		return (<div className="pd10">
			<Form />
		</div>)
	}
});
