import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd';

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data;
        return (
            <div>
                {data.length ? <HomeAd data={data}/> : <div>广告数据加载中...</div>}
            </div>
        )
    }
}

export default Ad
