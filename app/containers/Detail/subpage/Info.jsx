import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { getInfoData } from '../../../fetch/detail/detai.js';
import DetailInfo from '../../../components/DetailInfo';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/detail.js';

@connect(
    state => ({
        ...state
    }),
    actions
)
export default class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const info = this.props.detail.info;
        return (
            <div>
                {
                    info ? <DetailInfo data={info}/> : ''
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getInfoList();
    }
}
