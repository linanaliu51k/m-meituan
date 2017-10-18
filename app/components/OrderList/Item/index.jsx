import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less';
class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 2 //0-未评价 1-评价中 2-已评价
        };
    }
    render() {
        const data = this.props.data;
        return (
            <div className="order-item-container">
                <div className="clear-fix">
                    <div className="order-item-img float-left">
                        <img src={data.img}/>
                    </div>
                    <div className="order-item-comment float-right">
                        {
                            this.state.commentState === 0 ?
                            <button className="btn" onClick={this.showComment}>评价</button> : this.state.commentState === 1 ? '' :
                            <button className="btn unselected-btn">已评价</button>
                        }
                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                {
                    this.state.commentState === 1 ?
                    <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px', fontSize: '20px'}} className="comment-text" ref="commentText"></textarea>
                        <button className="btn" onClick={this.submitClickHandle}>提交</button>
                        <button className="btn unselected-btn" onClick={this.hideComment}>取消</button>
                    </div> : ''
                }
            </div>
        )
    }
    submitClickHandle = () => {
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const commentText = this.refs.commentText.value.trim();
        if (!commentText) {
            return;
        }
        //提交评论内容
        submitComment(id, commentText, this.commitOk);
    }
    commitOk = () => {
        this.setState({
            commentState: 2
        });
    }
    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        });
    }
    showComment = () => {
        this.setState({
            commentState: 1
        });
    }
    hideComment = () => {
        this.setState({
            commentState: 0
        });
    }
}

export default Item;
