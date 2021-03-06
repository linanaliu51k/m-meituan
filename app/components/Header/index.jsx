import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {withRouter} from 'react-router-dom';

import './style.less';
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
    clickHandle() {
        if (this.props.backRouter) {
            this.props.history.push(this.props.backRouter);
        } else {
            window.history.back();
        }
    }
}

export default withRouter(Header);
