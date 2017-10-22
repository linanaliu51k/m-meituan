import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import OrderListComponent from '../../../components/OrderList';
import * as actions from '../../../redux/actions/user.js';
import {postComments} from '../../../api/user/orderlist.js';
import './style.less';

@connect(
    state => ({
        userinfo: state.common,
        data: state.user.orderList
    }),
    actions
)
export default class OrderList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo;
        const data = this.props.data;
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    data.length ? <OrderListComponent data={data} submitComment={this.submitComment}/> : <div>加载中</div>
                }
            </div>
        )
    }
    componentDidMount() {
        //获取订单信息
        const username = this.props.userinfo.username;
        if (username) {
            this.props.getUserOrderlist(username);
        }
    }
    submitComment = (id, value, callback) => {
        const result = postComments(id, value);
        result.then(json => {
            //提交没问题
            if (json.errno === 0) {
                callback();
            }
        });
    }
}
