import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import ListComponent from '../../../components/CommentList'
import LoadMore from '../../../components/LoadMore'
import {connect} from 'react-redux'
import * as actions from "../../../redux/actions/detail.js";
import './style.less'

@connect(
    state => ({
        comment: state.detail.comment
    }),
    actions
)
export default class Comment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const comment = this.props.comment;
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    comment.data.length
                    ? <ListComponent data={comment.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                {
                    comment.hasMore
                    ? <LoadMore isLoadingMore={comment.isLoadingMore} loadMoreFn={this.loadMoreData}/>
                    : ''
                }
            </div>
        )
    }
    componentDidMount() {
        this.props.getCommentList();
    }
    loadMoreData = () => {
        this.props.getCommentList();
    }
}
