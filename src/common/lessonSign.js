import React from 'react'
import { List, InputItem, WhiteSpace, ActivityIndicator, Switch, Button, DatePicker, Picker, ImagePicker, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
const Item = List.Item;
const Brief = Item.Brief;
const zhNow = moment().locale('zh-cn').utcOffset(8);
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('1940-01-01 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
const minTime = moment('00:30 +0800', 'HH:mm Z').utcOffset(8);

const gmtNow = moment().utcOffset(0);
// 如果不是使用 List.Item 作为 children
const CustomChildren = (props) => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', height: '0.9rem', lineHeight: '0.9rem', padding: '0 0.3rem' }}
  >
    {props.children}
    <span style={{ float: 'right' }}>{props.extra}</span>
  </div>
);


let Form =React.createClass({
	getInitialState() {
	    return {
	      date: zhNow,
	      dpValue: null,
	    };
	  },
	  onChange(date) {
	    // console.log('onChange', date);
	    this.setState({
	      date,
	    });
	  },
	render:function(){
		const { getFieldProps } = this.props.form;
		const self=this;
	    return (<div>
	    	<List
	    	        renderHeader={() => '选择时间'}
	    	        style={{ backgroundColor: 'white' }}
	    	      >
	    	        <DatePicker
	    	          mode="date"
	    	          title="选择日期"
	    	          extra="可选,小于结束日期"
	    	          {...getFieldProps('date1', {
	    	            initialValue: zhNow,
	    	          })}
	    	          minDate={minDate}
	    	          maxDate={maxDate}
	    	        >
	    	          <List.Item arrow="horizontal">日期</List.Item>
	    	        </DatePicker>
	    	        <DatePicker mode="time" {...getFieldProps('time1')}>
	    	          <List.Item arrow="horizontal">时间,不限定上下限</List.Item>
	    	        </DatePicker>
	    	        <DatePicker
	    	          mode="time"
	    	          {...getFieldProps('time', {
	    	            initialValue: zhNow,
	    	          })}
	    	          minDate={minTime}
	    	          maxDate={maxTime}
	    	        >
	    	          <List.Item arrow="horizontal">时间</List.Item>
	    	        </DatePicker>
	    	        <DatePicker className="forss"
	    	          mode="datetime"
	    	          onChange={this.onChange}
	    	          value={this.state.date}
	    	        >
	    	          <List.Item arrow="horizontal">日期+时间</List.Item>
	    	        </DatePicker>
	    	        <DatePicker
	    	          mode="time"
	    	          format={val => val.format('HH:mm Z')}
	    	          okText="Ok"
	    	          dismissText="Cancel"
	    	          locale={enUs}
	    	          {...getFieldProps('customformat', {
	    	            initialValue: gmtNow,
	    	          })}
	    	        >
	    	          <List.Item arrow="horizontal">time(en_US)</List.Item>
	    	        </DatePicker>
	    	      </List>
	    	      <DatePicker
	    	        mode="date"
	    	        title="选择日期"
	    	        extra="请选择(可选)"
	    	        value={this.state.dpValue}
	    	        onChange={(v) => this.setState({ dpValue: v })}
	    	      >
	    	        <CustomChildren>时间选择(自定义 children)</CustomChildren>
	    	      </DatePicker>
	    </div>)
	},

});
Form = createForm()(Form);
module.exports=React.createClass({
	render:function(){
		return (<div className="pd10">
			<Form />
		</div>)
	}
});
