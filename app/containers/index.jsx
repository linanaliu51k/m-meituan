import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import localStore from '../util/localStore';
import { CITY_NAME } from '../config/localStoreKey.js';
import { connect } from 'react-redux';
import RouterMap from '../router/routeMap.jsx';
import * as actions from '../redux/actions/common.js';

@connect(
   state => ({}),
   actions
)
export default class App extends React.Component {
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
        this.props.setCurrentCity(cityName);
        this.setState({
            initDone: true
        });
    }
}
