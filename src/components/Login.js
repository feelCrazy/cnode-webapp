/**
 * Created by ming on 2017/2/27
 */
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {userLogin} from '../actions/actions';
import {browserHistory} from 'react-router';

const styles = {
    main: {
        width: "30%",
        textAlign: "center",
        margin: '0 auto',
        paddingTop: 100
    },
    unLine: {
        borderColor: '#ee1862'
    },
    login: {
        marginTop: 20
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accesstoken: '199183d1-b722-4cc4-bdaa-5443b964f84c'
        };
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
        const {userState} = newProps
        if (userState.isLogin && userState.res !== undefined) {
            const accesstoken = this.state.accesstoken;
            const loginName = userState.res.loginname;
            const id = userState.res.id;
            const avatarURL = userState.res.avatar_url;
            const userAcc = JSON.stringify({loginName, accesstoken, id, avatarURL});
            window.localStorage.setItem('userAcc', userAcc);
            browserHistory.push('/')
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value,
        });
    };

    clickLogin = (e) => {
        e.preventDefault();
        if (this.state.accesstoken !== '') {
            this.props.userAction(this.state.accesstoken);
        }
    };

    render() {
        return (
            <div>
                <div style={styles.main}>
                    <label>Key</label>
                    <TextField underlineFocusStyle={styles.unLine}
                               value={this.state.accesstoken}
                               name="accesstoken"
                               onChange={this.handleChange}
                               fullWidth={true}/>
                    <RaisedButton style={styles.login}
                                  primary={true}
                                  onClick={this.clickLogin}
                                  label="提交"/>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    userAction: React.PropTypes.func
};
Login.defaultProps = {};

function mapStateToProps(state) {
    return {
        userState: state.userReduce
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userAction: bindActionCreators(userLogin, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
