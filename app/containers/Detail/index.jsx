import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header';
import Info from './subpage/Info.jsx';
import Comment from './subpage/Comment'
import Buy from './subpage/Buy.jsx'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.match.params;
        return (
            <div>
                <Header title='商户详情'/>
                <Info id={params.id}/>
                <Buy id={params.id}/>
                <Comment id={params.id}/>
            </div>
        )
    }
}

export default Detail
