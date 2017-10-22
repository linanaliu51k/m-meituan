import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BuyAndStore from '../../../components/BuyAndStore';
import {withRouter} from 'react-router-dom';
import * as actions from '../../../redux/actions/store.js';
import {connect} from 'react-redux';

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }

    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle} storeHandle={this.storeHandle}/>
            </div>
        )
    }
    componentDidMount() {
        this.checkStoreState();
    }
    checkStoreState = () => {
        const id = this.props.id;
        const store = this.props.store;
        store.some(item => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                });
                return true;
            }
        });
    }
    //购买
    buyHandle = () => {
        //验证登录
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return;
        }
        //购买的流程
        //购买过程由于过于繁琐，这里就省略.

        //跳转到用户主页
        this.props.history.push('/User');
    }
    //收藏
    storeHandle = () => {
        //验证登录
        const loginFlag = this.loginCheck();
        if (!loginFlag) {
            return;
        }
        const id = this.props.id;
        if (this.state.isStore) {
            //已收藏，点击则取消收藏
            this.props.rm({id});
        } else {
            //未收藏，点击则收藏
            this.props.add({id});
        }

        //修改状态
        this.setState({
            isStore: !this.state.isStore
        });
    }
    //验证登录
    loginCheck = () => {
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if (!userinfo.username) {
            this.props.history.push('/login/' + encodeURIComponent('/detail/' + id));
            return false;
        }
        return true;
    }

}

export default connect(
    state => ({
        userinfo: state.common,
        store: state.store
    }),
    actions
)(withRouter(Buy));
