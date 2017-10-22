import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/common.js';
import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

@connect(
    state => ({
        ...state.common
    }),
    actions
)
export default class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }
    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                this.state.checking ? <div>中</div> : <LoginComponent loginHandle={this.loginHandle}/>
                }
            </div>
        )
    }
    loginHandle = (username) => {

        this.props.setUsername(username);

        const params = this.props.match.params;
        const router = params.router;

        if (router) {
            this.props.history.push(decodeURIComponent(router));
        } else {
            this.goUserPage();
        }
    }
    componentDidMount() {
        this.doCheck();
    }
    doCheck() {
        const username = this.props.username;
        if (username) {
            this.goUserPage()
        } else {
            this.setState({
                checking: false
            });
        }
    }
    goUserPage() {
        this.props.history.push('/User');
    }
}
