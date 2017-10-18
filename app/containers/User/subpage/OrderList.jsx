import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import {getOrderListData, postComment} from "../../../fetch/user/orderlist.js";
import OrderListComponent from '../../../components/OrderList';

import './style.less';
class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        const userinfo = this.props.userinfo;
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length ? <OrderListComponent data={this.state.data} submitComment={this.submitComment}/> : <div>加载中</div>
                }
            </div>
        )
    }
    componentDidMount() {
        //获取订单信息
        const username = this.props.userinfo.username;
        if (username) {
            this.loadOrderList(username);
        }
    }
    loadOrderList = (username) => {
        const result = getOrderListData(username);
        result.then(res => {
            return res.json();
        }).then(json => {
            this.setState({data: json});
        }).catch(ex => {
            if (__DEV__) {
                console.error('用户主页“订单列表”获取数据报错, ', ex.message)
            }
        });
    }
    submitComment = (id, value, callback) => {
        const result = postComment(id, value);
        result.then(res => {
            return res.json();
        }).then(json => {
            //提交没问题
            if (json.errno === 0) {
                callback();
            }
        });
    }
}

export default connect(
    state => ({
        userinfo: state.userinfo
    })
)(OrderList);
