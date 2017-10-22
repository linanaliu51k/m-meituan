import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import Header from '../../components/Header';
import UserInfo from "../../components/UserInfo";
import OrderList from './subpage/OrderList.jsx';

@connect(
    state => ({
        ...state.common
    })
)
export default class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const username = this.props.username;
        const cityName = this.props.currentCity;
        return (
            <div>
                <Header title="用户主页" backRouter="/"/>
                <UserInfo username={username} city={cityName}/>
                <OrderList username={username}/>
            </div>
        )
    }
    componentDidMount() {
        if (!this.props.username) {
            this.props.history.push('/Login');
        }
    }
}
