import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import Header from '../../components/Header';
import UserInfo from "../../components/UserInfo";
import OrderList from './subpage/OrderList.jsx';

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo;
        return (
            <div>
                <Header title="用户主页" backRouter="/"/>
                <UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>
            </div>
        )
    }
    componentDidMount() {
        if (!this.props.userinfo.username) {
            this.props.history.push('/Login');
        }
    }
}

export default connect(
    state => ({
        userinfo: state.userinfo
    })
)(User);
