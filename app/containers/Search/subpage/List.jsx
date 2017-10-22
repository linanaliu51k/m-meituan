import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import * as actions from '../../../redux/actions/search.js';
// import { getSearchData } from '../../../fetch/search/search'

@connect(
    state => ({
        ...state
    }),
    actions
)
export default class SearchList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const list = this.props.search;
        return (
            <div>
                {
                    list.data.length
                    ? <ListCompoent data={list.data}/>
                    : <div>加载中</div>
                }
                {
                    list.hasMore
                    ? <LoadMore isLoadingMore={list.isLoadingMore} loadMoreFn={this.loadMoreData}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取首页数据
        setTimeout(() => {
            this.props.getSearchList();
        }, 1000);
    }
    // 加载更多数据
    loadMoreData = () => {
        this.props.getSearchList();
    }
    // 处理重新搜索
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const category = this.props.category
        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return;
        }
        //重置数据
        this.props.initSearchList();
        // 重新加载数据
        setTimeout(() => {
            this.props.getSearchList();
        }, 1000);
    }
}
