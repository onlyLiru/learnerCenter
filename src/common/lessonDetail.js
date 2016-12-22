import React from 'react'
import { Toast, WhiteSpace, WingBlank, Button, List, Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
const district=[
				{
	            	value: '340000',
	            	label: '杭州市',
	            	children:[
		              	{
			                value: '340800',
			                label: '西湖区',
			                children:[
			                	{
				  	              value: '340824',
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
let Test = React.createClass({
  getInitialState() {
    return {
      data: [],
      cols: 1,
    };
  },
  onClick() {
    setTimeout(() => {
      this.setState({
        data: district,
      });
      
    }, 500);
  },
  onPickerChange(val) {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    if (val[0] === 'zj') {
      d.forEach(i => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
          } else if (val[1] === 'zj-hz') {
            i.children.forEach(j => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
    });
  },
  // setVal() {
  //   this.props.form.setFieldsValue({
  //     district: ['340000', '340800', '340822'],
  //   });
  // },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <List style={{ backgroundColor: 'white' }}>
        <Picker 
        	extra="请选择(可选)" 
        	data={district} 
        	title="选择地区" 
        	okText="ok"
        	dismissText="cancel"
        	{...getFieldProps('district', {
          			
        		})
        	}
        	onPickerChange={this.onPickerChange}
        >
        	<List.Item arrow="horizontal" onClick={this.onClick}>省市区选择</List.Item>
        </Picker>
      </List>
    </div>);
  },
});

Test = createForm()(Test);

module.exports=React.createClass({
	getInitialState () {
		return {
			content:<div></div>
		}
	},
	signBtnClick:function(){
		Toast.loading('加载中...', 1, () => {
			console.log('加载完成!!!');
		});
	},
	render () {
		return (<div>
			<WingBlank>
				<WhiteSpace size="sm" />
				<div className="content" dangerouslySetInnerHTML={{__html: this.state.content}} />
			    <WhiteSpace size="sm" />
			    <Button onClick={this.signBtnClick} className="bgColorRed">开始报名</Button>
			</WingBlank>
        </div>) 
	},
	componentDidMount:function () {
		this.setState({
			content:'<div><img src="http://img.fancyedu.com/sys/ic/operation/1476436649079_1_30.jpg"/>如果能知道用户的等待时间，可以使用组件 Progress 来替代。\
			可通过控制 ActivityIndicator 运动的快慢，来表明进程处理的速度。</div>'
		});
	}
});