import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localStore from '../util/localStore';
import { CITY_NAME } from '../config/localStoreKey.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userInfoActions from '../actions/userinfo.js';
import RouterMap from '../router/routeMap.jsx';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone ? <RouterMap/> : <div>加载中...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        let cityName = localStore.getItem(CITY_NAME);
        if (cityName == null) {
            cityName = '北京';
        }
        this.props.userInfoActions.update({
            cityName
        });
        this.setState({
            initDone: true
        });
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        userInfoActions : bindActionCreators(userInfoActions, dispatch)
    })
)(App);
