require('../css/common.scss');
import React from 'react';
import { List, InputItem, WhiteSpace, Switch, Button, DatePicker, Picker, ImagePicker, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import Upload from 'rc-upload';
import FileUpload from 'react-fileupload';
// import ReactUI from 'rctui';
import moment from 'moment';
import 'moment/locale/zh-cn';
const Item = List.Item;
const Brief = Item.Brief;
const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('1940-01-01 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
const minTime = moment('00:30 +0800', 'HH:mm Z').utcOffset(8);

const gmtNow = moment().utcOffset(0);

let district=[
				{
	            	value: '1',
	            	label: '杭州市',
	            	children:[
		              	{
			                value: '2',
			                label: '西湖区',
			                children:[
			                	{
				  	              value: '3',
				  	              label: '桃园小镇',
				  	            }
			                ]
			            }
		            ]
	            },
	            {
	            	value: '34000',
	            	label: '上海市',
	            	children:[
		              	{
			                value: '40800',
			                label: '松江区',
			                children:[
			                	{
				  	              value: '34024',
				  	              label: '泰晤士小镇',
				  	            }
			                ]
			            }
		            ]
	            }
            ];
let school=[{
	value: '1',
	label: '南开',
},
{
	value: '2',
	label: '北大',
}];

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];
const props = {
  action: '/upload.do',
  multiple: true,
  onStart(file) {
    console.log('onStart', file, file.name);
  },
  onSuccess(ret) {
    console.log('onSuccess', ret);
  },
  onError(err) {
    console.log('onError', err);
  },
  beforeUpload(file, fileList) {
  	alert(file.url)
    console.log(file, fileList);
    return new Promise((resolve) => {
      console.log('start check');
      setTimeout(() => {
        console.log('check finshed');
        resolve(file);
      }, 3000);
    });
  },
  previewImage(file) {

  }
};

let Form =React.createClass({
	render:function(){
		const self=this;
		const { getFieldProps, getFieldError } = this.props.form;
		/*本人照片url地址*/
		const picUrl=self.state.pic.picUrl;
	    return (<div>
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

});

Form=createForm()(Form);

module.exports=React.createClass({
	render:function(){
		return (<div className="pd10">
			<Form type={this.state.type} />
		</div>)
	},
	componentWillMount:function(){
		console.log(this.props);
		this.setState({
			type:this.props.location.query.type
		});
	}
});
