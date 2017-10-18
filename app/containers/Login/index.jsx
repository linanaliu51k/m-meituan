import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import * as actions from '../../actions/userinfo.js';
import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

class Login extends React.Component {
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
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        this.props.update(userinfo);

        const params = this.props.match.params;
        const router = params.router;

        if (router) {
            this.props.history.push(decodeURIComponent(router));
        } else {
            this.goUserPage();;
        }
    }
    componentDidMount() {
        this.doCheck();
    }
    doCheck() {
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
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

export default connect(
    state => ({
        userinfo: state.userinfo
    }),
    actions
)(Login);
