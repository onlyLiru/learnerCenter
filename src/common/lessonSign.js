import React from 'react'
import { List, InputItem, WhiteSpace, ActivityIndicator, Switch, Button, DatePicker, Picker, ImagePicker, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
<<<<<<< HEAD
=======
import Upload from 'rc-upload';
import FileUpload from 'react-fileupload';
// import ReactUI from 'rctui';
>>>>>>> 33e56c44c9ebabd26a75686e521d79eee8943491
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
<<<<<<< HEAD
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
=======
	    	<List>
	    		<InputItem
	    			placeholder="请输入姓名"
	    			clear
	    			{...getFieldProps('name')}>
	    			姓名
	    		</InputItem>
	    		
	    		<DatePicker
		        	mode="date"
		        	title="选择日期"
		        	{...getFieldProps('birthday', {
		            
		        	})}
		        	minDate={minDate}
          			maxDate={zhNow}
		        >
	    			<List.Item arrow="horizontal">出生日期</List.Item>
	    		</DatePicker>
			    <Upload 
			    	name='file'
			    	action='upload.json'
			    	component="div" 
			    	style={{ display: 'block' }}
			    	onStart={ (file)=> {
				    		this.setState({
				    			pic:{
				    				picUrl:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
				    				hasChange:true
				    			}
				    		});
			    			Toast.loading('加载中...', 1, () => {
			    			    
			    			});
				    	}
				    }>
			    	<List.Item 
			    		arrow="horizontal"
			    		extra={<img style={{width:100,height:100}} src={picUrl} />}
			    		>
				    	本人照片
				    </List.Item>
			    </Upload>
	    	</List>
	    	<WhiteSpace size="sm" />
	    	<List>
	    		<DatePicker
		        	mode="date"
		        	title="选择日期"
		        	{...getFieldProps('italyDate', {
		            
		        	})}
		        	minDate={minDate}
          			maxDate={zhNow}
		        >
	    			<List.Item arrow="horizontal">到意大利时间</List.Item>
	    		</DatePicker>
	    		<Picker 
	    			cols="3" 
	    			extra="请选择" 
	    			data={district} 
	    			title="选择地区" 
	    			{...getFieldProps('district', {
	    					initialValue: ['1', '2', '3'],
	    				})
	    			}
	    		>
	    		  <List.Item arrow="horizontal">所在城市</List.Item>
	    		</Picker>
	    		<List.Item
		          extra={<Switch
		            {...getFieldProps('isStudying', {
		              initialValue: true,
		              valuePropName: 'checked',
		            })}
		          />}
		        >是否在读语言学校</List.Item>
        		<Picker 
        			cols="1" 
        			extra="请选择(可选)" 
        			data={school} 
        			title="选择地区" 
        			{...getFieldProps('school', {
        		  			initialValue: ['2'],
        				})
        			}
        		>
        			<List.Item arrow="horizontal">报考院校</List.Item>
        		</Picker>
        		<Picker cols="1" 
        			extra="请选择" 
        			data={district} 
        			title="选择地区" 
        			{...getFieldProps('subject', {
		        			initialValue: ['1'],
		        		})
        			}
        		>
        		  <List.Item arrow="horizontal">专业</List.Item>
        		</Picker>
        		<Picker cols="1" 
        			extra="请选择" 
        			data={district} 
        			title="选择地区" 
        			{...getFieldProps('diploma', {
		        			initialValue: ['1'],
		        		})
        			}
        		>
        		  <List.Item arrow="horizontal">学历</List.Item>
        		</Picker>
	    	</List>
	    	<WhiteSpace size="sm" />
	    	<List>
    		    <Upload
    		    	{
    		    		...getFieldProps('file', {
		        			initialValue: ['1'],
		        		})
        			}
        			{...props}
    		    >
    		    	<List.Item 
    		    		arrow="horizontal"
    		    		extra="选择文件">
    			    	提交作品
    			    </List.Item>
    		    </Upload>
	    	</List>
	    	<List>
	    		<InputItem
	    		clear
	    		{...getFieldProps('phone',{
						rules: [
						  { required: true, message: '请输入帐号' },
						  { validator: this.validatePhone },
						],
		    		})
		    	}
		    	error={!!getFieldError('phone')}
		    	onErrorClick={() => {
		    	  alert(getFieldError('phone').join('、'));
		    	}}
	    		placeholder="请输入联系方式">
        			联系方式
        		</InputItem>
	    	</List>
	    	<WhiteSpace size="lg" />
	    	{this.state.btn}
	    </div>)
	},
	getInitialState(){
		const type=this.props.type;
		return {
			pic:{
				picUrl:'http://mall.fancyedu.com/WEB-UED/fancy/img/defaul.png',
				hasChange:false
			},
			btn:type==1 ? <Button type="primary" loading onClick={this.onSubmit}>体验课程</Button> : <Button type="primary" onClick={this.onSubmit}>立即付费</Button>
		}
	},
	validatePhone(rule, value, callback) {
	  if (value && value.length > 4) {
	    callback();
	  } else {
	    callback(new Error('帐号至少4个字符'));
	  }
	},
	onSubmit:function(){
		this.props.form.validateFields({ force: true }, (error) => {
		  if (!error) {
		  	const data= Object.assign(this.props.form.getFieldsValue(),{a:10,b:21});
		    console.log(data);
		  } else {
		    alert('校验失败');
		  }
		});

		const data= Object.assign(this.props.form.getFieldsValue(),this.state.pic);
		console.log(data);
	},
>>>>>>> 33e56c44c9ebabd26a75686e521d79eee8943491

});
Form = createForm()(Form);
module.exports=React.createClass({
	render:function(){
		return (<div className="pd10">
			<Form type={this.state.type} />
		</div>)
<<<<<<< HEAD
=======
	},
	componentWillMount:function(){
		console.log(this.props);
		this.setState({
			type:this.props.location.query.type
		});
>>>>>>> 33e56c44c9ebabd26a75686e521d79eee8943491
	}
});
