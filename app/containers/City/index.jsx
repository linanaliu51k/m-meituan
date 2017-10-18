import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import localStore from '../../util/localStore';
import { CITY_NAME } from '../../config/localStoreKey.js';
import { bindActionCreators } from 'redux';
import * as userInfoActions from '../../actions/userinfo.js';
import * as router from 'react-router-dom';

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        //修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);

        //修改localStorage
        localStore.setItem(CITY_NAME, newCity);

        //跳转到首页
        this.props.history.push('/');
    }
}

export default connect(
    state => ({
        userinfo: state.userinfo
    }),
    dispatch => ({
        userInfoActions: bindActionCreators(userInfoActions, dispatch)
    })
)(City);
