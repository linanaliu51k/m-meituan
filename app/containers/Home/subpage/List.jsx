import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ListComponent from '../../../components/List';
import LoadMore from '../../../components/LoadMore';

import './style.less';

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const list = this.props.data;
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    list.data.length ? <ListComponent data={list.data}/> : <div></div>
                }
                {
                    list.hasMore
                    ? <LoadMore isLoadingMore={list.isLoadingMore} loadMoreFn={this.props.loadMoreFn}/>
                    : ''
                }
            </div>
        )
    }
}

export default List;
