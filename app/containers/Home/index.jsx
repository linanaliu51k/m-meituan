import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad.jsx';
import List from './subpage/List.jsx';
import * as actions from "../../redux/actions/home.js";

@connect(
    state => ({
        ...state
    }),
    actions
)
export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount () {
        this.props.getAd();
        this.props.getList();
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.common.currentCity} history={this.props.history}/>
                <Category/>
                <div style={{height: '15px'}}></div>
                <Ad data={this.props.home.ads}/>
                <List data={this.props.home.list} cityName={this.props.common.currentCity} loadMoreFn={this.props.getList}/>
            </div>
        )
    }
}
