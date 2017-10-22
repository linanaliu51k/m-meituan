import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux';
import Header from '../../components/Header';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';
import localStore from '../../util/localStore';
import { CITY_NAME } from '../../config/localStoreKey.js';
import * as actions from '../../redux/actions/common.js';

@connect(
    state => ({
        currentCity: state.common.currentCity
    }),
    actions
)
export default class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.currentCity}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        //修改redux
        this.props.setCurrentCity(newCity);

        //修改localStorage
        localStore.setItem(CITY_NAME, newCity);

        //跳转到首页
        this.props.history.push('/');
    }
}
